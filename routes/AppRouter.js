const express = require('express')
const router = express.Router()

const TeamRouter = require ('./TeamRouter')

router.use('/team', TeamRouter)

module.exports = router


