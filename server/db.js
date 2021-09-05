const knex = require('knex');

module.exports = knex({
  client: 'postgres',
  connection: {
    host: 'db',
    user: 'ivs',
    password: 'admin',
    database: 'ivs',
  },
});
