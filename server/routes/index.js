const express = require("express");
const router = express.Router();
const userController = require("./../controller/user.controller");
const boardsController = require("../controller/boards.controller");
const auth = require("../config/auth");

//users

router.post("/user/login", userController.login);
router.post("/user/register", userController.register);
router.get("/user/profile", auth, userController.currentUser);

router.post("/board/create", auth, boardsController.createBoard);
router.get("/board/:user/getAllBoards", auth, boardsController.getAllBoards);

module.exports = router;
