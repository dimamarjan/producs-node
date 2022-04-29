const services = require('../../services');

const productsGetQueryThree = async (req, res, next) => {
	try {
		const { message, code } = await services.productsGetQueryThree();
		res.status(code).json(message);
	} catch (error) {
		next(error);
	}
};

module.exports = productsGetQueryThree;
