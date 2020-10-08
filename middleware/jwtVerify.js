const jwt = require('jsonwebtoken')
require('dotenv').config();

const verifyToken = (req, res, next) => {
    jwt.verify(req.headers.authentication, process.env.JWT_SECRET, (err, decoded)=>{
        if(err)
            res.status(401).send({error: {
                message: err.message
            }})
        else{
            req.user = decoded;
            next();
        }
    })
}

module.exports = verifyToken;