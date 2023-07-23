const express = require("express");
const toDoController = require("./toDo.controller");
const verifyAuthToken = require("../../middlewares/verifyAuthToken");

const router = express.Router();


const toDoRoutes = router;
module.exports = toDoRoutes;
