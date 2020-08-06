const express = require("express");
const router = express.Router();
const userController = require("./../controller/user.controller");
const boardsController = require("../controller/boards.controller");
const cardController = require("../controller/cards.controller");

const auth = require("../config/auth");

//users

router.post("/user/login", userController.login);
router.post("/user/register", userController.register);
router.get("/user/profile", auth, userController.currentUser);

//boards
router.post("/board/create", auth, boardsController.createBoard);
router.get("/board/:user/getAllBoards", auth, boardsController.getAllBoards);
router.get("/board/:boardName", auth, boardsController.getOneBoard);

//card
router.post("/board/card/items", auth, cardController.addItemsToCard);
router.post("/board/card/create", auth, cardController.createCard);
router.put("/board/card/reorder", auth, cardController.reorderCards);

module.exports = router;
