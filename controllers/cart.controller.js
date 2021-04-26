const Cart = require("../models/cart.model");
const User = require("../models/user.model");

const getCarts = async (req, res) => {
  const carts = await Cart.find({});
  res.json({ success: true, carts });
};

const findUserCart = async (req, res, next, userId) => {
  try {
    let user = await User.findOne({ _id: userId });
    if (!user) {
      res.status(404).json({
        success: false,
        message: "Invalid user! Kindly register to continue",
      });
      throw Error("Invalid User");
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, products: [] });
      cart = await cart.save();
    }
    req.cart = cart;
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to retrive cart details",
      errorMessage: error.message,
    });
  }
};

const getCartItems = async (cart) => {
  cart.products = cart.products.filter((product) => product.active);
  cart = await cart
    .populate({
      path: "products._id",
      select:
        "name image price brand category inStock fastDelivery rating offer",
    })
    .execPopulate();
  return cart.products.map((product) => {
    let cartItem = JSON.parse(JSON.stringify(product._id));
    Object.assign(cartItem, {quantity: product.quantity});
    return cartItem;
  });
};

const getUserCart = async (req, res) => {
  try {
    let { cart } = req;
    let cartItems = await getCartItems(cart);
    res.json({ success: true, cart: cartItems });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Unable to retrive the cart",
      errMessage: err.message,
    });
  }
};

const updateCart = async (req, res) => {
  const { _id, action } = req.body;
  const { cart } = req;
  let resStatus;
  const productExists = cart.products.some((product) => product._id == _id);
  if (productExists) {
    resStatus = 200;
    for (let product of cart.products) {
      if (product._id == _id) {
        switch(action.toUpperCase()){
          case "ADD":product.quantity = product.quantity+1;
          break;
          case  "REMOVE": product.quantity = product.quantity-1;
          break;
          case "MOVE": product.quantity = 0;
        }
        product.quantity > 0 ? (product.active = true) : (product.active = false);
        break;
      }
    }
  } else {
    resStatus = 201;
    cart.products.push({ _id, quantity:1, active: true });
  }

  let updatedCart = await cart.save();
  updatedCart = await getCartItems(updatedCart);
  res.status(resStatus).json({ success: true, cart: updatedCart });
};

const clearCart = async (req, res) => {
  let { cart } = req;
  for (let product of cart.products) {
    product.quantity = 0;
    product.active = false;
  }
  let emptyCart = await cart.save();
  emptyCart = await getCartItems(emptyCart);
  res.json({ success: true, cart: emptyCart });
};

module.exports = {
  getCarts,
  findUserCart,
  getUserCart,
  updateCart,
  clearCart,
};
