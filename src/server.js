const app = require("./app");
const { port } = require("./config");
const pool = require("./db");
const createTable = require("./utils/query");

async function main() {
  try {
    await pool.connect();
    console.log("Connected to the database");
    // Start the server
    app.listen(port, () => {
      console.log(`app listening on port ${port} | http://localhost:${port}`);
    });
    //createTable.users(); 
    //createTable.todos(); 
  } catch (error) {
    console.log("Failed to connect", error);
  }
}

main();
