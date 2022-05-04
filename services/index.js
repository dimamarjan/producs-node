const {
	productsAdd,
	productsGet,
	productsUpdate,
	productsDelete,
} = require('./products');

const { categoriesGet } = require('./categories');

const { suppliersGet, suppliersGetQueryFour } = require('./suppliiers');

module.exports = {
	productsAdd,
	productsGet,
	productsUpdate,
	productsDelete,

	categoriesGet,

	suppliersGet,
};
