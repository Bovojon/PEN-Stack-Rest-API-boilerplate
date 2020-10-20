import db from '../models/index.js';

const User = db.User;
const Op = db.Sequelize.Op;

export const findAll = async (req, res) => {
  const users = await User.findAll().catch(err => {
    return res.status(500).send({ message: err.message || 'Cannot find object' });
  });
  return res.status(200).json(users);
}