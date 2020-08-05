const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const routes = require("./routes/index");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

//cors manual
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", 'Content-Type, Authorization, Content-Length, X-Requested-With');
//   res.header("Access-Control-Allow-Methods", "PUT, POST, GET, OPTIONS, DELETE");
//   next();
// });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use("/api", routes);
app.use(logger("dev"));

const mongooptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect("mongodb://localhost:27017/Trello", mongooptions, function (
  err
) {
  if (!err) {
    console.log("Mongo DB connected");
  }
});
module.exports = app;
