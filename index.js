const port = 3000;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

const categoryRouter = require("./routers/category");
const userAuth = require("./routers/userAuthentication");

app.use("/category", categoryRouter);
app.use("/", userAuth);

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
