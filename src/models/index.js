import { Sequelize } from 'sequelize';

import dbConfig from '../config/database.js';
import UserModel from './user.js';

const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

try {
  await sequelize.authenticate();
  console.log('Successfully connected to the database.');
} catch (error) {
  console.log('Unable to connect to the database: ', error);
}

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = UserModel(sequelize, Sequelize);

export default db;