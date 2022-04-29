const services = require('../../services');

const suppliersGet = async (req, res, next) => {
	try {
		const { message, code } = await services.suppliersGet();
		res.status(code).json(message);
	} catch (error) {
		next(error);
	}
};

module.exports = suppliersGet;
