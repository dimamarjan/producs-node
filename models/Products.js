const { DataTypes } = require('sequelize');
const db = require('../db/db');
const Suppliers = require('./Suppliers');
const Categories = require('./Categories');

const Products = db.define(
	'Products',
	{
		ProductID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		ProductName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Price: {
			type: DataTypes.REAL,
			allowNull: false,
		},
		SupplierID: {
			type: DataTypes.INTEGER,
			references: {
				model: Suppliers,
				key: 'SupplierID',
			},
		},
		CategoryID: {
			type: DataTypes.INTEGER,
			references: {
				model: Categories,
				key: 'CategoryID',
			},
		},
	},
	{ timestamps: false }
);

(async () => {
	await Suppliers.sync();
	await Categories.sync();
	await Products.sync();
})();

Products.belongsTo(Suppliers, { foreignKey: 'SupplierID' });
Products.belongsTo(Categories, { foreignKey: 'CategoryID' });

module.exports = Products;
