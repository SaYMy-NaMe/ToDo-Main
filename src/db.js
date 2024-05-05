const { Pool } = require("pg");
const config = require("./config");

const pool = new Pool({
  connectionString: config.db.supabase_url
});

module.exports = pool;
