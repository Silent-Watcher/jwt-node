const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    fullname: { type: String, minLength: 5, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, minLength: 8, required: true },
  },
  { timestamps: true }
);

const userModel = model('user', userSchema);

module.exports = userModel;