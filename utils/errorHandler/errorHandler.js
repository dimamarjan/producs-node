const { BAD_REQ, SERVER_ERR } = require('../../common/constants/httpCodes');

const errorHandler = (err, res) => {
	if (err.name === 'ValidationError') {
		return res.status(BAD_REQ).json({
			status: err.name,
			code: BAD_REQ,
			message: err.message,
		});
	} else {
		return res.status(SERVER_ERR).json({
			status: 'error',
			code: SERVER_ERR,
			message: err.message,
		});
	}
};

module.exports = errorHandler;
