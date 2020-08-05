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

const Card = mongoose.model("Card", cardsSchema);
module.exports = Card;
