

require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'test_db',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
  },
};