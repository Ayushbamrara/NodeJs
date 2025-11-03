const dotenv = require("dotenv");
import { defineConfig } from 'drizzle-kit';

dotenv.config();

const conifg =  defineConfig({
    dialect: 'postgresql',
  out: './drizzle',
  schema: './drizzle/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url:process.env.DATABASE_URL,
  },
});

module.exports = conifg;
