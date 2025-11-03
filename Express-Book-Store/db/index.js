const {drizzle} = require('drizzle-orm/node-postgres');

const {db} = require(process.env.DATABASE_URL);

module.exports = db;