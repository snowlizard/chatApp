const express  = require('express');
const morgan   = require('morgan');
const mongoose = require('mongoose');

mongoose
    .connect(`mongodb+srv://mrjack:${process.env.MONGO_PASS}@sandbox.wqouu.mongodb.net/chatApp?retryWrites=true&w=majority`);
mongoose.Promise = Promise;

const app = express();

app.use(morgan('dev'));

app.use(express.static('dist'));


module.exports = app;
