const Board = require("../models/board.model");
const User = require("../models/user.model");

module.exports = {
  createBoard: async function (req, res, next) {
    const { boardName, id } = req.body;
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
      const { user } = req.params;
      const currentuser = await User.findOne({ username: user });
      await Board.findOne({ createdBy: currentuser && currentuser._id })
        .populate("User")
        .exec(function (err, board) {
          return res.status(200).json(board);
        });
    } catch (err) {
      if (err) throw err;
    }
  },

  getOneBoard: async function (req, res, next) {
    const { user, boardName } = req.params;
    try {
      const board = await Board.findOne({ createdBy: user, name: boardName });
      await res.status(200).json(board);
    } catch (err) {
      console.log(err);
    }
  },
};
