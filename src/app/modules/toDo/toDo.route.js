const express = require("express");
const toDoController = require("./toDo.controller");
const verifyAuthToken = require("../../middlewares/verifyAuthToken");

const router = express.Router();

router.post("/", verifyAuthToken, toDoController.createToDo);
router.get("/", verifyAuthToken, toDoController.getAllToDo);
router.patch("/:id", verifyAuthToken, toDoController.updateToDo);
router.delete("/:id", verifyAuthToken, toDoController.deleteToDo);

const toDoRoutes = router;
module.exports = toDoRoutes;
