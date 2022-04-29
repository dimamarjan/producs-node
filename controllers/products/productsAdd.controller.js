const services = require('../../services');

const productsAdd = async (req, res, next) => {
	try {
		const { message, code } = await services.productsAdd(req.body);
		res.status(code).json(message);
	} catch (error) {
		next(error);
	}
};

module.exports = productsAdd;
