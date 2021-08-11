const express = require("express");
const router = express.Router();
const {
  findUserCart,
  getUserCart,
  updateCart,
  clearCart,
  removeFromCart,
} = require("../controllers/cart.controller");

router.use(findUserCart);

router
  .route("/")
  .get(getUserCart)
  .post(updateCart)
  .put(removeFromCart)
  .delete(clearCart);

module.exports = router;
