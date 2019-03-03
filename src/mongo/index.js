const mongoist = require('mongoist')

module.exports = mongoist('mongodb://localhost:27017/##DB_NAME##', { useNewUrlParser: true })