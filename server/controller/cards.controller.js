const Card = require("../models/cards.model");
const Board = require("../models/board.model");
const Notification = require("../models/notification.model");

module.exports = {
  createCard: async function (req, res, next) {
    try {
      const { name, boardName } = req.body;
      const { id } = req.user;
      const card = new Card({
        name: name,
      });
      const newCard = await card.save();
      const boards = await Board.findOne({ name: boardName, createdBy: id });
      const board = await Board.findOneAndUpdate(
        { name: boardName, createdBy: id },
        {
          $push: {
            cards: newCard._id,
          },
        },
        { new: true }
      ).exec(async (err, board) => {
        if (!err) {
          // await new Notification({
          //   type: "created",
          //   user: id,
          //   description: "new Card",
          // }).save();
          return res.status(201).json(board);
        }
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
          // await new Notification({
          //   type: "moved",
          //   user: id,
          //   description: "card",
          // }).save();
          return res.status(200).json(card);
        }
      });
    } catch (err) {
      console.log(err);
    }
  },

  updateCardItems: async function (req, res, next) {
    try {
      const { cardId, value, itemId } = req.body;
      const card = await Card.findOneAndUpdate(
        {
          _id: cardId,
          "items._id": itemId,
        },
        {
          $set: {
            "items.$.item": value,
          },
        },
        (err, card) => {
          if (!err) return res.status(200).json(card);
        }
      );
    } catch (err) {
      if (err) return res.status(400).json({ msg: err.message });
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

  deleteItemFromCard: async function (req, res, next) {
    try {
      const { cardId, itemId } = req.body;
      const card = await Card.findByIdAndUpdate(
        {
          _id: cardId,
          "items._id": itemId,
        },
        {
          $pull: {
            items: {
              _id: itemId,
            },
          },
        },
        (err, card) => {
          if (!err) return res.status(200).json(card);
        }
      );
    } catch (err) {
      if (err) throw new Error(err.message);
    }
  },
};
