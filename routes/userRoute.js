const router = require('express').Router();
const userOperation = require('./../controller/user');

// GET ALL USERS INFORMATION
router.get('/', (req, res) => {
    userOperation.findAll()
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

// GET SPECIFIC USERS INFORMATION WITH EMAIL ID
router.get('/:emailId', (req, res) => {
    userOperation.findOne(req.params.emailId)
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(400)
            res.send(err)
        })
})

// UPDATE ABOUT USER USING EMAILID
router.put('/about/:emailId', (req, res) => {
    userOperation.updateAbout(req.params.emailId, req.body.about)
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

module.exports = router;