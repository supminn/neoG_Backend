require("dotenv").config();
const port = process.env.PORT || 3000;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.send("Welcome to api-supminn");
});

// app.use(routeHandler);
// app.use(errorHandler);

app.listen(port, () => {
  console.log("server started on port:", port);
});
