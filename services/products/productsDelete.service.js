const { Products } = require('../../models');
const { OK, NOT_FOUND } = require('../../common/constants/httpCodes');

const productsDelete = async (ProductID) => {
	try {
		const product = await Products.findOne({ where: ProductID });
		if (!product) {
			return {
				message: {
					status: 'NOT_FOUND',
					code: NOT_FOUND,
					message: 'product not found',
				},
				code: NOT_FOUND,
			};
		}
		product.destroy();
		return {
			message: {
				status: 'OK',
				code: OK,
				message: 'product deleted successfully',
			},
			code: OK,
		};
	} catch (error) {
		throw new Error(error);
	}
};

module.exports = productsDelete;
