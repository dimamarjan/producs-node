const services = require('../../services');

const productsGetQueryTwo = async (req, res, next) => {
	try {
		const { message, code } = await services.productsGetQueryTwo();
		res.status(code).json(message);
	} catch (error) {
		next(error);
	}
};

module.exports = productsGetQueryTwo;
