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
  reorderCards: async function (req, res, next) {
    try {
      const { id } = req.user;
      const { source, destination, itemId } = req.body;
      // const dest = await Card.findById(droppableId);
      const item = await Card.findOne(
        {
          _id: source,
          "items._id": itemId,
        },
        { "items.$": 1 }
      );
      await Card.findByIdAndUpdate(
        destination,
        {
          $push: {
            items: {
              item: item.items[0].item,
            },
          },
        },
        {
          new: true,
        }
      ).exec(async (err, card) => {
        if (!err) {
          await Card.findByIdAndUpdate(
            source,
            {
              $pull: {
                items: {
                  _id: itemId,
                },
              },
            },
            { safe: true, upsert: true }
          );

          return res.status(200).json(card);
        }
      });
    } catch (err) {
      console.log(err);
    }
  },

  addItemsToCard: async function (req, res, next) {
    try {
      const { item, cardId } = req.body;
      const card = await Card.findByIdAndUpdate(
        cardId,
        {
          $push: {
            items: {
              item,
            },
          },
        },
        {
          new: true,
        }
      ).exec(function (err, card) {
        if (!err) return res.status(200).json(card);
      });
    } catch (err) {
      console.error(err);
    }
  },
};
