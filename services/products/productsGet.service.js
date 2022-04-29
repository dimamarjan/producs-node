const { Products } = require('../../models');
const { OK, NOT_FOUND } = require('../../common/constants/httpCodes');

const productsGet = async () => {
	try {
		const products = await Products.findAll({
			attributes: ['ProductID', 'ProductName', 'Price'],
			include: { all: true },
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

module.exports = productsGet;
