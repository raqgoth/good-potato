const { Team } = require('../db/Schema')

const SignInTeam = async (req, res, next) => {
    const team = await Team.findOne({ email: req.body.email})
    if (team) {
      const payload = {
        
        email: team.email
      }
      return res.send(payload)
    }
    res.status(401).send({ msg: 'Unauthorized' })
  }
  const RefreshSessionTeam = (req, res) => {
    const token = res.locals.token
    res.send(token)
  }
  
  module.exports = {
    SignInTeam,
    RefreshSessionTeam
  }
  