'use strict';
const { default: mongoose } = require('mongoose');

const DB_NAME = 'jwt';
const DB_URL = `mongodb://127.0.0.1:27017/${DB_NAME}`;

const connectToDb = async (dbUrl) => await mongoose.connect(dbUrl);

connectToDb(DB_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'failed to connect to mongoDb'));
