const router = require('express').Router()
const ControllerChallenge = require('../controllers/controllerChallenge')

// router.get('/', (req, res) => res.send('ini di Challenge'))
router.get('/', ControllerChallenge.findAll)

// Add Challenge
router.get('/add', ControllerChallenge.createForm)
router.post('/add', ControllerChallenge.createChallenge)

module.exports = router