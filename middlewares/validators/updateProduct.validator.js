const Joi = require('joi');

const updateProduct = async (req, _, next) => {
	try {
		const validator = Joi.object({
			ProductID: Joi.number().required(),
			ProductName: Joi.string(),
			Price: Joi.number(),
			SupplierID: Joi.number(),
			CategoryID: Joi.number(),
		});
		const { error } = validator.validate(req.body);
		if (error) {
			next(error);
		} else {
			next();
		}
	} catch (err) {
		next(err);
	}
};

module.exports = updateProduct;
