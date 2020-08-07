const mongoose = require("mongoose");
const User = require("./user.model");
const Schema = mongoose.Schema;
const boardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cards",
    },
  ],
  backgroundColor: {
    type: String,
    default: "rgb(0, 121, 191)",
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Board = mongoose.model("Board", boardSchema);
module.exports = Board;
