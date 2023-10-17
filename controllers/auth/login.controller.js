const jwt = require('jsonwebtoken');

('use strict');

const userModel = require('../../models/user.model');
const { verifyPassword, genToken } = require('../../utils/auth.utils');

const loginController = async (req, res) => {
	let { email, password } = req.body;
	let user = await userModel.findOne({ email });
	if (!user || !verifyPassword(password, user.password))
		return res.status(404).send({
			code: res.statusCode,
			error: { message: 'email or password is invalid' },
		});
	let token = genToken({ email: user.email, password: user.password });
	res.status(200).json({
		code: res.statusCode,
		message: 'successfully logged in 😁',
		token,
	});
};

module.exports = loginController;
