const { Sequelize } = require('sequelize');
require('dotenv').config();

const { DB_HOST, DB_DIALECT, DB_NAME, DB_USER_NAME, DB_PASSWORD } = process.env;

const db = new Sequelize(DB_NAME, DB_USER_NAME, DB_PASSWORD, {
	host: DB_HOST,
	dialect: DB_DIALECT,
	logging: console.log,
});

module.exports = db;
