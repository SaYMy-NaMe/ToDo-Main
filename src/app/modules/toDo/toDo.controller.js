const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const toDoService = require("./toDo.service");

const createToDo = catchAsync(async (req, res) => {
  const toDo = req.body;

  const user = req.verifiedUser;

  const result = await toDoService.createToDoInDB(user, toDo);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "ToDo created successfully",
    data: result,
  });
});

const getAllToDo = catchAsync(async (req, res) => {
  const user = req.verifiedUser;

  const result = await toDoService.getAllToDoFromDB(user);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: `${
      result.length === 0
        ? "No ToDo items found for the user."
        : "ToDo items retrieved successfully."
    }`,
    data: result,
  });
});

const updateToDo = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updatedToDo = req.body;
  const user = req.verifiedUser;

  const result = await toDoService.updateToDoInDB(id, updatedToDo, user);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "ToDo item updated successfully.",
    data: result,
  });
});

const toDoController = {
  createToDo,
  getAllToDo,
  updateToDo,
};

module.exports = toDoController;
