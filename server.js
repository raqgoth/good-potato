// const express = require('express');
// const PORT = process.env.PORT || 5000;

// const app = express();


// app.listen(PORT, () => {
//   console.log(`Express server listening on port ${PORT}`);
// });
const AppRouter = require('./routes/AppRouter')
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const connection = require('./db/connection')
const path = require('path')

const PORT = process.env.PORT || 5000
const app = express()

// Initialize Middleware
app.use(logger('dev'))
app.use(helmet({ contentSecurityPolicy: false }))
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
//app.use(express.static(path.join(__dirname, 'client', 'build')))
// Initialize Middleware
app.disable('X-Powered-By')

app.get('/', (req, res) => res.send({ msg: 'Server Working' }))
app.use('/api', AppRouter)

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
)

app.listen(PORT, async () => {
  try {
    await connection
    console.log('Database Connected')
    console.log(`App listening on port: ${PORT}`)
  } catch (error) {
    throw new Error('Connection Error')
  }
})
