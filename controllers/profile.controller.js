'use strict';

const indexProfileController = (req, res) => {
	let user = req?.authenticated && req.user;
	res.status(200).send({
		code: res.statusCode,
		message: `hello ${user.fullname} welcome to your profile `,
		user,
	});
};

module.exports = indexProfileController;
