'use strict';
const { Router } = require('express');
const indexController = require('../controllers/index.controller');
const authRouter = require('./auth.routes');

const router = Router();

router.use('/auth', authRouter);

router.get('/', indexController);

module.exports = router;
