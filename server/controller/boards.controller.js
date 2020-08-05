const Board = require("../models/board.model");
const User = require("../models/user.model");

module.exports = {
  createBoard: async function (req, res, next) {
    const { id } = req.user;
    const { boardName } = req.body;
    try {
      const newBoard = new Board({
        name: boardName,
        createdBy: id,
      });
      await newBoard.save();
      return res.status(201).send("Created");
    } catch (err) {
      if (err) throw err;
    }
  },
  getAllBoards: async function (req, res, next) {
    try {
      const { id } = req.user;
      await Board.find({ createdBy: id })
        .populate("User")
        .exec(function (err, board) {
          return res.status(200).json(board);
        });
    } catch (err) {
      return res.status(400).json({ msg: err.message });
    }
  },

  getOneBoard: async function (req, res, next) {
    try {
      const { boardName } = req.params;
      const { id } = req.user;
      const board = await Board.findOne({ createdBy: id, name: boardName });
      return res.status(200).json(board);
    } catch (err) {
      console.log(err);
    }
  },
};
