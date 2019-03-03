const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./mongo')

// Routes
const appsRoutes = require('./api/routes/apps')

// Middlewares

// Logging
app.use(morgan('dev'))

// Body parser
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

// CORS
app.use(cors())

// Routing
app.use('/apps', appsRoutes)

// Error handling routes
app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message
    }
  })
})

module.exports = app