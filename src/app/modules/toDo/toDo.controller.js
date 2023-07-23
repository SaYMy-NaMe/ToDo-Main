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


const toDoController = {
  createToDo,
};

module.exports = toDoController;
