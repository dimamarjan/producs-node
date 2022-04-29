const { fn, col } = require('sequelize');
const { Products, Suppliers } = require('../../models');
const { OK, NOT_FOUND } = require('../../common/constants/httpCodes');

const productsGetQueryThree = async () => {
	try {
		const products = await Products.findAll({
			attributes: [[fn('SUM', col('Price')), 'TOTAL PRICE']],
			include: [
				{
					model: Suppliers,
					as: 'Supplier',
					where: { Country: 'USA' },
				},
			],
			group: ['Supplier.Country', 'Supplier.SupplierID'],
		});
		if (!products) {
			return {
				message: {
					status: 'NOT_FOUND',
					code: NOT_FOUND,
					products: [],
				},
				code: NOT_FOUND,
			};
		}
		return {
			message: {
				status: 'OK',
				code: OK,
				products,
			},
			code: OK,
		};
	} catch (error) {
		throw new Error(error);
	}
};

module.exports = productsGetQueryThree;
