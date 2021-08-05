const {model } = require('mongoose')

const TeamSchema = require('./models/Team')

const Team = model('teams',TeamSchema)



module.exports = {
    Team
}