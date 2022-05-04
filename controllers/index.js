const {
	productsAdd,
	productsGet,
	productsUpdate,
	productsDelete,
} = require('./products');

const { categoriesGet } = require('./categories');

const { suppliersGet } = require('./suuppliers');

module.exports = {
	productsAdd,
	productsGet,
	productsUpdate,
	productsDelete,

	categoriesGet,

	suppliersGet,
};
