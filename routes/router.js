'use strict';
const { Router } = require('express');
const indexController = require('../controllers/index.controller');
const authRouter = require('./auth.routes');
const profileRouter = require('./profile.routes');

const router = Router();

router.use('/auth', authRouter);
router.use('/profile', profileRouter);

router.get('/', indexController);

module.exports = router;
