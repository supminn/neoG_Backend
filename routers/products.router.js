const express = require("express");
const router = express.Router();
const { getProducts, addProducts, findProduct, getProductById, modifyProduct } = require("../controllers/product.controller");

router
  .route("/")
  .get(getProducts)
  .post(addProducts);

router.param("productId", findProduct);

router
  .route("/:productId")
  .get(getProductById)
  .post(modifyProduct)
  .delete((req, res) => {
    res.json({
      success: false,
      message: "DELETE functionality not yet implemented",
    });
    /*
      let {product} = req;
      await product.remove();
      product.deleted = true;
      res.json({success:true, result})
    */
  });

module.exports = router;
