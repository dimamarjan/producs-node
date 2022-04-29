const { DataTypes } = require('sequelize');
const db = require('../db/db');

const Suppliers = db.define(
	'Suppliers',
	{
		SupplierID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		SupplierName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		City: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Country: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{ timestamps: false }
);

// (async () => {
// 	await Suppliers.sync();
// })();

module.exports = Suppliers;
