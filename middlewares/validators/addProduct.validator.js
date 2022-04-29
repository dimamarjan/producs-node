const Joi = require('joi');

const addProduct = async (req, _, next) => {
	try {
		const validator = Joi.object({
			ProductName: Joi.string().required(),
			Price: Joi.number().required(),
			SupplierID: Joi.number().required(),
			CategoryID: Joi.number().required(),
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

module.exports = addProduct;
