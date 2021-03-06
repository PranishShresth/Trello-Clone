const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const routes = require("./routes/index");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server started at " + PORT);
});
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
app.use(cors());
app.use("/api", routes);
app.use(logger("dev"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const mongooptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

app.all("*", (req, res, next) => {
  const { method, originalUrl } = req;
  console.log(`=>request received: ${method}: ${originalUrl}`);
  next();
});

mongoose.connect(process.env.MONGO_URI, mongooptions, function (err) {
  if (!err) {
    console.log("Mongo DB connected");
  }
});
module.exports = app;
