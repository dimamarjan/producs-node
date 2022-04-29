const services = require('../../services');

const productsGetQueryOne = async (req, res, next) => {
	try {
		const { message, code } = await services.productsGetQueryOne();
		res.status(code).json(message);
	} catch (error) {
		next(error);
	}
};

module.exports = productsGetQueryOne;
