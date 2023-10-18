'use strict';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sha1 = require('sha1');

const JWT_SECRET = sha1('my JWT auth token secret');

const hashPassword = (password) => {
	let salt = bcrypt.genSaltSync(10);
	let hash = bcrypt.hashSync(password, salt);
	return hash;
};

const verifyPassword = (password, hash) => {
	return bcrypt.compareSync(password, hash);
};

const genToken = (payload, secret = JWT_SECRET) => {
	return jwt.sign(payload, secret);
};

const verifyToken = (token, secret = JWT_SECRET) => {
	return jwt.verify(token, secret);
};

module.exports = { hashPassword, verifyPassword, genToken, verifyToken };
