const app = require("./app");
const { port, database_url } = require("./config");

async function main() {
  try {
    app.listen(port, () => {
      console.log(`app listening on port ${port} | http://localhost:${port}`);
    });
  } catch (error) {
    errorLogger.error("Failed to connect", error);
  }
}

main();
