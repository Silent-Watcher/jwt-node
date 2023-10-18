'use strict';
const { default: mongoose } = require('mongoose');
const { env } = require('process');

const DB_URL = `${env.DB_URL}/${env.DB_NAME}`;

const connectToDb = async (dbUrl) => await mongoose.connect(dbUrl);

connectToDb(DB_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'failed to connect to mongoDb'));
