'use strict';

const { Router } = require('express');
const indexProfileController = require('../controllers/profile.controller');
const checkAuth = require('../middlewares/checkAuth.middleware');


const profileRouter = Router();

profileRouter.get('/', checkAuth ,indexProfileController);


module.exports = profileRouter;