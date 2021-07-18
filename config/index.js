const app = require('express')()
const consign = require('consign')
const db = require('./database')

app.db = db

consign()
    .then('./config/middlewares.js')
    .then('./src/controllers')
    .then('./config/routes.js')
    .into(app)

module.exports = app
