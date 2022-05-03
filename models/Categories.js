const { DataTypes } = require('sequelize');
const db = require('../db/db');

const Categories = db.define(
	'Categories',
	{
		CategoryID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		CategoryName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	},
	{ timestamps: false }
);

(async () => {
	await Categories.sync();
})();

module.exports = Categories;
