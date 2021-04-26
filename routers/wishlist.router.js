const express = require("express");
const router = express.Router();
const {getWishlists, findUserWishlist, getUserWishlist, updateWishlist} = require("../controllers/wishlist.controller");

router.route("/")
.get(getWishlists); 

router.param("userId", findUserWishlist);

router.route("/:userId")
.get(getUserWishlist)
.post(updateWishlist);

module.exports = router;