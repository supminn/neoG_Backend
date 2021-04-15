const port = 3000;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

const categoryRouter = require("./routers/category.router");
const userAuthRouter = require("./routers/userAuth.router");
const videoRouter = require("./routers/videos.router");
const productRouter = require("./routers/products.router");

app.use("/category", categoryRouter);
app.use("/", userAuthRouter);
app.use("/videos", videoRouter);
app.use("/products",productRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use((req, res) => {
  res
    .status(404)
    .json({
      success: false,
      message: "The route you're looking for couldn't be found",
    });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: err.message });
});

app.listen(process.env.PORT || port, () => {
  console.log("server started...");
});
