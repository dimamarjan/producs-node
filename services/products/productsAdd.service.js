const { Products, Categories, Suppliers } = require('../../models');
const { CREATED, BAD_REQ } = require('../../common/constants/httpCodes');

const productsAdd = async (productData) => {
	try {
		const { CategoryID, SupplierID } = productData;
		const category = await Categories.findOne({
			where: { CategoryID },
			raw: true,
		});
		const supplier = await Suppliers.findOne({
			where: { SupplierID },
			raw: true,
		});
		if (category && supplier) {
			const product = await Products.create(productData);
			return {
				message: {
					status: 'CREATED',
					code: CREATED,
					product,
				},
				code: CREATED,
			};
		}
		return {
			message: {
				status: 'BAD_REQ',
				code: BAD_REQ,
				message: "wrong 'CategoryID' or 'SupplierID'",
			},
			code: BAD_REQ,
		};
	} catch (error) {
		throw new Error(error);
	}
};

module.exports = productsAdd;
