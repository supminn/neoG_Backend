const express = require("express");
const router = express.Router();
const {getCarts, findUserCart, getUserCart, updateCart, clearCart} = require("../controllers/cart.controller");

router.route("/")
.get(getCarts);

router.param("userId", findUserCart);

router.route("/:userId")
.get(getUserCart)
.post(updateCart)
.delete(clearCart);

module.exports = router;
