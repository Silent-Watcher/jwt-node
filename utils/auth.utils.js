'use strict';
const bcrypt = require('bcrypt');

const hashPassword = (password) => {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);
  return hash;
};

module.exports = hashPassword;