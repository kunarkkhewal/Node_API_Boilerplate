const express = require('express');
const app = express();

const verifyToken = require('../middleware/jwtVerify');

const loginRoute = require('./loginRoute');
const userRoute = require('./userRoute');

app.use('/', loginRoute);
app.use(verifyToken);
app.use('/users', userRoute)

module.exports = app;