const { Products } = require('../../models');
const { OK, NOT_FOUND } = require('../../common/constants/httpCodes');

const productsGetQueryTwo = async () => {
	try {
		const products = await Products.findOne({ order: [['Price', 'ASC']] });
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

module.exports = productsGetQueryTwo;
