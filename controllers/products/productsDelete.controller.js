const services = require('../../services');

const productsDelete = async (req, res, next) => {
	try {
		const { message, code } = await services.productsDelete(req.body);
		res.status(code).json(message);
	} catch (error) {
		next(error);
	}
};

module.exports = productsDelete;
