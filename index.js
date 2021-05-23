require("dotenv").config();
const port = process.env.PORT || 3000;
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

const databaseConnection = require("./database/dbConnect");

 databaseConnection();

const userRouter = require("./routers/user.router");
const productRouter = require("./routers/product.router");
const cartRouter = require("./routers/cart.router");
const wishlistRouter = require("./routers/wishlist.router");
const addressRouter = require("./routers/address.router");
const videoRouter = require("./routers/video.router");
const likedVideoRouter = require("./routers/likedVideo.router");
const historyRouter = require("./routers/history.router");
const playlistRouter = require("./routers/playlist.router");
const errorHandler = require("./middlewares/errorHandler");
const routeHandler = require("./middlewares/routeHandler");

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/cart", cartRouter);
app.use("/wishlist", wishlistRouter);
app.use("/address", addressRouter);
app.use("/videos", videoRouter);
app.use("/liked-video", likedVideoRouter);
app.use("/history", historyRouter);
app.use("/playlist", playlistRouter);

app.get("/", (req, res) => {
  res.send("Welcome to api-supminn");
});

app.use(routeHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log("server started on port:", port);
});
