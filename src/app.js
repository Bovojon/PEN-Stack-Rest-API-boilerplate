import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import db from './models/index.js';
import routes from './routes/index.js';

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/**
 * PROD:
 * Set force: false 
 * db.sequelize.sync();
 * 
 * DEV:
 * Below is for DEV where force: true will drop the table if it 
 * exists.
 */
db.sequelize.sync({ force: true }).then(() => {
  console.log("Dropped and re-synced database.");
}).catch(err => {
  console.error("Unable to setup Sequelize: ", err);
}).finally(() => {
  db.sequelize.close();
});

routes(app);

export default app;