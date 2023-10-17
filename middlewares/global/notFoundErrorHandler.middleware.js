'use strict';

const notFoundErrorHandler = (req, res) => {
	return res.status(404).send({
		code: 404,
		error: {
			message: `${req.url} not found!`,
		},
	});
};

module.exports = notFoundErrorHandler;
