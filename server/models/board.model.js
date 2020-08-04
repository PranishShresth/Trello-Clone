const mongoose = require("mongoose");
const User = require("./user.model");
const Schema = mongoose.Schema;
const boardSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  cards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cards",
    },
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Board = mongoose.model("Board", boardSchema);
module.exports = Board;
