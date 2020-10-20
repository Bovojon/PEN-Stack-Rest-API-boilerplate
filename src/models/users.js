import pool from './index.js';

export const getAll = async () => {
  const { rows } = await pool.query('SELECT * FROM users');
  return(rows)
}