const {
	productsAdd,
	productsGet,
	productsUpdate,
	productsDelete,
	productsGetQueryOne,
	productsGetQueryTwo,
	productsGetQueryThree,
	productsGetQueryFour,
} = require('./products');

const { categoriesGet } = require('./categories');

const { suppliersGet } = require('./suuppliers');

module.exports = {
	productsAdd,
	productsGet,
	productsUpdate,
	productsDelete,
	productsGetQueryOne,
	productsGetQueryTwo,
	productsGetQueryThree,
	productsGetQueryFour,

	categoriesGet,

	suppliersGet,
};
