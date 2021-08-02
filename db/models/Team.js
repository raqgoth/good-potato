const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = new Schema(
    {
        email: {
            type: String,
            required: true,
            index: true
          },
          password: {
            type: String,
      
          }
    },
    { timestamps: true }
)
