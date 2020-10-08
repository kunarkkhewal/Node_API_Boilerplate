const express = require('express');
const app = express();

const loginRoute = require('./loginRoute');
const userRoute = require('./userRoute');

app.use('/', loginRoute);
app.use('/users', userRoute)

module.exports = app;