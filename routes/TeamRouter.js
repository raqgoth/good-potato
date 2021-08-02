const express = require ('express')
const router = express.Router()
const TeamController = require('../controllers/TeamController')

router.post('/login', TeamController.SignInTeam)

module.exports = router