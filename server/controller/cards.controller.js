const Card = require("../models/cards.model");
const Board = require("../models/board.model");

module.exports = {
  createCard: async function (req, res, next) {
    try {
      const { name, boardName } = req.body;
      const { id } = req.user;
      const card = new Card({
        name: name,
      });
      console.log(boardName);
      const newCard = await card.save();
      const boards = await Board.findOne({ name: boardName, createdBy: id });
      console.log(boards);
      const board = await Board.findOneAndUpdate(
        { name: boardName, createdBy: id },
        {
          $push: {
            cards: newCard._id,
          },
        },
        { new: true }
      ).exec((err, board) => {
        if (!err) return res.status(201).json(board);
      });
    } catch (err) {
      console.error(err);
    }
  },
  addItemsToCard: async function (req, res, next) {
    try {
    } catch (err) {
      console.error(err);
    }
  },
};
