const Joi = require('joi');

const deleteProduct = async (req, _, next) => {
	try {
		const validator = Joi.object({
			ProductID: Joi.number().required(),
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

module.exports = deleteProduct;
