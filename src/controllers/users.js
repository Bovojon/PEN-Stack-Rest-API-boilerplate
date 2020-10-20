import { getAll } from '../models/users.js';

export const getUsers = (req, res, next) => {
  res.status(200).send(getAll())
}