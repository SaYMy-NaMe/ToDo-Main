const pool = require("../../../db");
const ApiError = require("../../../errors/ApiError");

const createToDoInDB = async (user, payload) => {
  const { id } = user;
  const { title, description } = payload;

  const query =
    "INSERT INTO todos (title, description, is_done, created_at, updated_at, user_id) VALUES ($1, $2, false, current_timestamp, current_timestamp, $3) RETURNING *";
  const values = [title, description, id];

  const result = (await pool.query(query, values)).rows[0];
  return result;
};


const toDoService = {
  createToDoInDB,
};

module.exports = toDoService;
