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

const { suppliersGet, suppliersGetQueryFour } = require('./suppliiers');

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
