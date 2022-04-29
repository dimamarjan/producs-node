const app = require('../app');
const db = require('../db/db');
require('dotenv').config();
const Categories = require('../models/Categories');
const Suppliers = require('../models/Suppliers');
const Products = require('../models/Products');

const { PORT } = process.env;

const testDB = async () => {
	try {
		await db.authenticate();
		console.log('Connection has been established successfully.');
		return true;
	} catch (error) {
		throw new Error(error);
	}
};

(async () => {
	try {
		const isDbConnection = await testDB();
		if (isDbConnection) {
			app.listen(PORT, () => {
				console.log(`Server running on port: ${PORT}`);
			});
		}
	} catch (err) {
		console.error('Unable to connect to the database:', err.message);
	}
})();

process.on('SIGINT', () => {
	db.close();
});
