import pkg from 'pg';
const { Pool } = pkg;

import dbConfig from '../config/database.js'

const pool = new Pool({
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DATABASE,
  host: dbConfig.HOST
});

pool.on('error', (err) => {
  console.log('Error on idle client', err)
  process.exit(-1)
})

export default pool;