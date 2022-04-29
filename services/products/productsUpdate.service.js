const { Products, Categories, Suppliers } = require('../../models');
const { OK, NOT_FOUND } = require('../../common/constants/httpCodes');

const productsUpdate = async (productData) => {
	try {
		const { ProductID, CategoryID, SupplierID } = productData;
		if (CategoryID) {
			const category = await Categories.findOne({
				where: { CategoryID },
				raw: true,
			});
			if (!category) {
				delete productData.CategoryID;
			}
		}
		if (SupplierID) {
			const supplier = await Suppliers.findOne({
				where: { SupplierID },
				raw: true,
			});
			if (!supplier) {
				delete productData.SupplierID;
			}
		}
		delete productData.ProductID;
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
		product.set(productData);
		product.save();
		return {
			message: {
				status: 'OK',
				code: OK,
				product,
			},
			code: OK,
		};
	} catch (error) {
		throw new Error(error);
	}
};

module.exports = productsUpdate;
