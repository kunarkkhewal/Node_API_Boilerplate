const router = require('express').Router();
require('dotenv').config();
const jwt = require('jsonwebtoken');
const userOperation = require('./../controller/user');

router.get('/', async (req, res) => {
    try {
        const result = await userOperation.loginUser(req.headers);
        const token = jwt.sign({username: req.headers.email}, process.env.JWT_SECRET)
        res.status(200).send({result, token});
    } catch (error) {
        res.status(400).send(error)
    }
});

router.post('/', async (req, res) => {
    try {
        const result = await userOperation.createUser(req.body);
        const token = jwt.sign({username: req.body.email}, process.env.JWT_SECRET)
        res.status(200).send({result, token});
    } catch (error) {
        res.status(400).send(error)
    }
});

module.exports = router;
