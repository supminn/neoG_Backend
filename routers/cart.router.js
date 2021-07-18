const express = require("express");
const router = express.Router();
const {
  findUserCart,
  getUserCart,
  updateCart,
  clearCart,
  checkoutToPayment,
} = require("../controllers/cart.controller");

router.use(findUserCart);

router
  .route("/")
  .get(getUserCart)
  .post(updateCart)
  .put(checkoutToPayment)
  .delete(clearCart);

module.exports = router;
