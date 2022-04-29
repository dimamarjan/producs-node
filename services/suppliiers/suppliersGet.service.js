const { Suppliers } = require('../../models');
const { OK, NOT_FOUND } = require('../../common/constants/httpCodes');

const suppliersGet = async () => {
	try {
		const suppliers = await Suppliers.findAll();
		if (!suppliers) {
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
				suppliers,
			},
			code: OK,
		};
	} catch (error) {
		throw new Error(error);
	}
};

module.exports = suppliersGet;
