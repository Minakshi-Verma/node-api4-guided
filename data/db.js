const knex = require('knex');

const environment = process.env.DB_ENV || 'development'; // changed node to DB
const config = require('../knexfile.js')[environment];

module.exports = knex(config);


//iMP to remember
//git remote -v shows the list of remote you have
//should be origin by default
//git remote add name url used to clone
//git push remotename branch