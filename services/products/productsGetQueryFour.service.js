const { Products, Suppliers, Categories } = require('../../models');
const { OK, NOT_FOUND } = require('../../common/constants/httpCodes');

const productsGetQueryFive = async () => {
	try {
		const supplier = await Products.findAll({
			attributes: [],
			include: [
				{
					model: Categories,
					as: 'Category',
					where: {
						CategoryName: 'Condiments',
					},
					attributes: ['CategoryID'],
				},
				{
					model: Suppliers,
					as: 'Supplier',
					attributes: [
						'SupplierID',
						'SupplierName',
						'City',
						'Country',
					],
				},
			],
			group: ['Category.CategoryID', 'Supplier.SupplierID'],
		});
		if (!supplier) {
			return {
				message: {
					status: 'NOT_FOUND',
					code: NOT_FOUND,
					supplier: [],
				},
				code: NOT_FOUND,
			};
		}
		return {
			message: {
				status: 'OK',
				code: OK,
				supplier,
			},
			code: OK,
		};
	} catch (error) {
		throw new Error(error);
	}
};

module.exports = productsGetQueryFive;
