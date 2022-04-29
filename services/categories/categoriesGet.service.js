const { Categories } = require('../../models');
const { OK, NOT_FOUND } = require('../../common/constants/httpCodes');

const categoriesGet = async () => {
	try {
		const categories = await Categories.findAll();
		if (!categories) {
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
				categories,
			},
			code: OK,
		};
	} catch (error) {
		throw new Error(error);
	}
};

module.exports = categoriesGet;
