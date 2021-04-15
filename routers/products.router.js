const express = require("express");
const router = express.Router();
const products = require("../data/products");

router
  .route("/")
  .get((req, res) => {
    res.json(products);
  })
  .post((req, res) =>
    res.send({ success: false, message: "POST functionality not implemented" })
  );

router
  .route("/:id")
  .get((req, res) => {
    const { id } = req.params;
    const data = products.find((item) => item.id === id);
    res.json(data);
  })
  .post((req, res) =>
    res.send({ success: false, message: "POST functionality not implemented" })
  )
  .delete((req, res) =>
    res.send({
      success: false,
      message: "DELETE functionality not implemented",
    })
  );

module.exports = router;
