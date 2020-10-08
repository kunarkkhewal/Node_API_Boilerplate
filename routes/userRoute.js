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

// GET SPECIFIC USERS INFORMATION
router.get('/:id', (req, res) => {
    userOperation.findOne(req.params.id)
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(400)
            res.send(err)
        })
})

//UPDATE/ADD RELATIONSHIP STATUS OF USER 
router.post('/:id/relationship', (req, res) => {
    userOperation.updateRelationShipStatus(req.params.id, req.body.relationship)
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

// UPDATE/ADD ABOUT USER
router.put('/:id/about', (req, res) => {
    userOperation.updateAbout(req.params.id, req.body.about)
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

module.exports = router;