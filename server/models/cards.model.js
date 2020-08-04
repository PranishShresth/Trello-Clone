const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardsSchema = new Schema({
  name: String,
  items: [
    {
      item: String,
    },
  ],
});

const Cards = mongoose.model("Cards", cardsSchema);
module.exports = Cards;
