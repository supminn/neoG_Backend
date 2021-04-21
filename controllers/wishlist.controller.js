const Wishlist = require("../models/wishlist.model");
const { extend } = require("lodash");
const { update } = require("../models/wishlist.model");

//userId, products-> id
const getWishlists = async (req, res) => {
  const wishlists = await Wishlist.find({});
  res.json({ success: true, wishlists });
};

const findUserWishlist = async (req, res, next, userId) => {
  try {
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
      message: "Request failed please check errorMessage key for more details",
      errorMessage: error.message,
    });
  }
};

const getUserWishlist = async (req, res) => {
  try {
    let { wishlist } = req;
    wishlist.products = wishlist.products.filter((product) => product.active);
    wishlist = await wishlist.populate("products._id").execPopulate();
    res.json({ success: true, wishlist });
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
  const productExists = wishlist.products.some(
    (product) => product._id == _id
  );
  if (productExists) {
      resStatus = 200;
    //   wishlist.products = wishlist.products.map(product => product._id == _id ? {...product, active: !product.active}: product);
    for (let product of wishlist.products) {
      if (product._id == _id) {
        product.active = !product.active;
      }
    }
  }
  else{
      resStatus = 201;
      wishlist.products.push({_id, active: true});
  }

  let updatedWishlist = await wishlist.save();
  updatedWishlist.products = updatedWishlist.products.filter(
    (product) => product.active
  );
  updatedWishlist = await updatedWishlist
    .populate("products._id")
    .execPopulate();
  res.status(resStatus).json({ success: true, wishlist: updatedWishlist });
};

module.exports = {
  getWishlists,
  findUserWishlist,
  getUserWishlist,
  updateWishlist,
};
