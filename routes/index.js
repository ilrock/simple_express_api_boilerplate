const express = require('express')
const router = express.Router()

const usersRoutes = require('./users')
const authRoutes = require('./auth')

router.use('/api/v1/users', usersRoutes)
router.use('/api/v1/auth', authRoutes)

module.exports = router