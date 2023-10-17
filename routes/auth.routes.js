'use strict';

const { Router } = require('express');
const loginController = require('../controllers/auth/login.controller');
const registerController = require('../controllers/auth/register.controller');

const authRouter = Router();

authRouter.post('/login', loginController);
authRouter.post('/register', registerController);

module.exports = authRouter;
