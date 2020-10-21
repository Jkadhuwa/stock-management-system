import 'dotenv/config';

export default
{
  development: {
    database: 'evergreenDB_dev',
    username: 'postgres',
    password: 'Uninet41234',
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: false
  },
  test: {
    database: 'evergreenDB_test',
    username: 'steven',
    password: null,
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};