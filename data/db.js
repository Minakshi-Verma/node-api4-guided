const knex = require('knex');

const environment = process.env.DB_ENV || 'development'; // changed node to DB
const config = require('../knexfile.js')[environment];

module.exports = knex(config);
