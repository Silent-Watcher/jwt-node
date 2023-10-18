'use strict';

const userModel = require('../models/user.model');
const { verifyToken } = require('../utils/auth.utils');

const checkAuth = async (req, res, next) => {
try {
		let authHeader = req?.headers?.authorization;
		if (!authHeader) {
			return res.status(403).json({
				code: res.statusCode,
				error: {
					message: 'No credentials sent!',
				},
			});
		}
		let [bearer, token] = authHeader.split(' ');
		if (bearer && bearer.toLowerCase() === 'bearer') {
			if (token) {
				let verifyResult = verifyToken(token);
				const user = await userModel.findOne({ email: verifyResult.email });
				req.authenticated = !!user;
				if (!user)
					return res
						.status(404)
						.send({
							code: res.statusCode,
							error: { message: 'invalid token' },
						});
				req.user = user;
				return next();
			}
		}
		throw {
			status: 403,
			error: {
				message: 'invalid credentials sent!',
			},
		};
} catch (error) {
	next(error);
}
};

module.exports = checkAuth;
