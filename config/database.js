const config = require('../knexfile')
const dotenv = require('dotenv/config')
console.log(process.env.NODE_ENV)
const knex = require('knex')(config.development)

module.exports = knex