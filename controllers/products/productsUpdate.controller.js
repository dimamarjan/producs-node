const services = require('../../services');

const productsUpdate = async (req, res, next) => {
	try {
		const { message, code } = await services.productsUpdate(req.body);
		res.status(code).json(message);
	} catch (error) {
		next(error);
	}
};

module.exports = productsUpdate;
