const services = require('../../services');

const categoriesGet = async (req, res, next) => {
	try {
		const { message, code } = await services.categoriesGet();
		res.status(code).json(message);
	} catch (error) {
		next(error);
	}
};

module.exports = categoriesGet;
