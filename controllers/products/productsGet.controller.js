const services = require('../../services');

const productsGet = async (req, res, next) => {
	try {
		const { message, code } = await services.productsGet();
		res.status(code).json(message);
	} catch (error) {
		next(error);
	}
};

module.exports = productsGet;
