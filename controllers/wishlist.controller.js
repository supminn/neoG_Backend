const User = require("../models/user.model");
const Wishlist = require("../models/wishlist.model");

const getWishlists = async (req, res) => {
  const wishlists = await Wishlist.find({});
  res.json({ success: true, wishlists });
};

const findUserWishlist = async (req, res, next, userId) => {
  try {
    let user = await User.findOne({ _id: userId });
    if (!user) {
      res
        .status(404)
        .json({
          success: false,
          message: "Invalid user! Kindly register to continue",
        });
      throw Error("Invalid User");
    }
    let wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      wishlist = new Wishlist({ userId, products: [] });
      wishlist = await wishlist.save();
    }
    req.wishlist = wishlist;
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to retrive wishlist details",
      errorMessage: error.message,
    });
  }
};

const getWishlistItems = async (wishlist) => {
  wishlist.products = wishlist.products.filter((product) => product.active);
  wishlist = await wishlist.populate("products._id").execPopulate();
  return wishlist.products.map((product) => product._id);
};

const getUserWishlist = async (req, res) => {
  try {
    let { wishlist } = req;
    let wishlistItems = await getWishlistItems(wishlist);
    res.json({ success: true, wishlistItems });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Unable to retrive the wishlist",
      errMessage: err.message,
    });
  }
};

const updateWishlist = async (req, res) => {
  const { _id } = req.body;
  const { wishlist } = req;
  let resStatus;
  const productExists = wishlist.products.some((product) => product._id == _id);
  if (productExists) {
    resStatus = 200;
    for (let product of wishlist.products) {
      if (product._id == _id) {
        product.active = !product.active;
        break;
      }
    }
  } else {
    resStatus = 201;
    wishlist.products.push({ _id, active: true });
  }

  let updatedWishlist = await wishlist.save();
  let wishlistItems = await getWishlistItems(updatedWishlist);
  res.status(resStatus).json({ success: true, wishlist: wishlistItems });
};

module.exports = {
  getWishlists,
  findUserWishlist,
  getUserWishlist,
  updateWishlist,
};
