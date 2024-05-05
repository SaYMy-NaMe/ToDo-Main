const pool = require("../db");
const createTable = {
  users: () => {
    pool.query(
      `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    gender VARCHAR NOT NULL,
    designation VARCHAR,
    phoneNumber INTEGER UNIQUE NOT NULL,
    password VARCHAR NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
)`,
      (error) => {
        if (error) {
          console.error(`Error occurred while creating users table: ${error}`);
        } else {
          console.log("Users table created");
        }
        // Don't forget to release the client when you're done with it.
        // pool.end();
      }
    );
  },
  todos: () => {
    pool.query(
      `CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    description VARCHAR, 
    is_done BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    user_id INTEGER REFERENCES users(id)
)`,
      (error) => {
        if (error) {
          console.error(`Error occurred while creating todos table: ${error}`);
        } else {
          console.log("todos table created");
        }
        // Don't forget to release the client when you're done with it.
        // pool.end();
      }
    );
  },
};
module.exports = createTable;
