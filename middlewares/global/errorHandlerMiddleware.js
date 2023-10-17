'use strict';
const errorHandler = (err, req, res) => {
	return res.status(err.status || 500).send({
		code: res.statusCode,
		error: {
			message: err.message || 'internal server error',
			...err,
		},
	});
};

module.exports = errorHandler;
