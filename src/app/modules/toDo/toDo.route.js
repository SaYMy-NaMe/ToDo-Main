const express = require("express");
const toDoController = require("./toDo.controller");
const verifyAuthToken = require("../../middlewares/verifyAuthToken");

const router = express.Router();

router.post("/", verifyAuthToken, toDoController.createToDo);
router.get("/", verifyAuthToken, toDoController.getAllToDo);

const toDoRoutes = router;
module.exports = toDoRoutes;
