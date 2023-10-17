'use strict';

const indexController = (req, res) => {
  res.status(200).send({
    code: res.statusCode,
    message: 'Express.js auth system using JWT token 🐱‍👤',
  });
};

module.exports = indexController;
