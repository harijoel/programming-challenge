const dotenv = require('dotenv');
dotenv.config('./.env');

/**
 * THIS IS FOR THE KNEX CLI CONFIG ONLY.
 *
 * IT WILL HAVE NO EFFECT ON YOUR API CODE.
 */

const connection = process.env.PG_CONNECTION_STRING;

const config = {
  client: 'pg',
  connection,
  migrations: {
    directory: './src/database/migrations',
  },
  seeds: {
    directory: './src/database/seeds/scripts',
  },
};

module.exports = config;
