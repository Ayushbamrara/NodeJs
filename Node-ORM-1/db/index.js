const { Pool } = require("pg");
const {drizzle} = require("drizzle-orm/node-postgres");

// postgres://<username>:<password>@<host>:<port>/<db_name>

require("dotenv/config");
const schema = require("../drizzle/schema");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool, { schema }); // ✅ drizzle instance

async function connectDB() {
  const client = await pool.connect();
  console.log("✅ Connected to PostgreSQL via Pool");
  client.release();
}

module.exports = { db, connectDB };