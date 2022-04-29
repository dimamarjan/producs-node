const services = require('../../services');

const productsGetQueryFour = async (req, res, next) => {
	try {
		const { message, code } = await services.productsGetQueryFour();
		res.status(code).json(message);
	} catch (error) {
		next(error);
	}
};

module.exports = productsGetQueryFour;
