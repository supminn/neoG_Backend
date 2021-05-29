const express = require("express");
const router = express.Router();
const {findUserCart, getUserCart, updateCart, clearCart} = require("../controllers/cart.controller");


router.use(findUserCart);

router.route("/")
.get(getUserCart)
.post(updateCart)
.delete(clearCart);

module.exports = router;
