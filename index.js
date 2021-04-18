require('dotenv').config();
const port = process.env.PORT || 3000;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json());

const databaseConnection = require("./database/dbConnect");

(async () => {
  await databaseConnection();
})();

const categoryRouter = require("./routers/category.router");
const userAuthRouter = require("./routers/userAuth.router");
const videoRouter = require("./routers/videos.router");
const productRouter = require("./routers/products.router");
const errorHandler = require("./middlewares/errorHandler");
const routeHandler = require("./middlewares/routeHandler");


app.use("/category", categoryRouter);
app.use("/", userAuthRouter);
app.use("/videos", videoRouter);
app.use("/products",productRouter);

app.get("/", (req, res) => {
  res.send("Welcome to api-supminn");
});

app.use(routeHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log("server started on port:", port);
});
