'use strict';

const userModel = require('../../models/user.model');
const hashPassword = require('../../utils/auth.utils');

const registerController = async (req, res, next) => {
	try {
		let { fullname, email, password } = req.body;
		let user = await userModel.create({
			fullname,
			email,
			password: hashPassword(password),
		});
		if (user)
			return res.status(201).send({
				code: res.statusCode,
				message: 'user created successfully',
				user,
			});
		throw new { status: 406, message: 'email or fullname is invalid' }();
	} catch (error) {
		next(error);
	}
};

module.exports = registerController;
