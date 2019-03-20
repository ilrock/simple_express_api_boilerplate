const mongoose = require('mongoose')
const dbDebug = require('debug')('app:db')
const Fawn = require('fawn')

module.exports = function () {
  mongoose.connect('mongodb://localhost/##YOUR_DB_NAME##')
    .then(() => dbDebug('Connected to Mongo'))
  Fawn.init(mongoose)
}


