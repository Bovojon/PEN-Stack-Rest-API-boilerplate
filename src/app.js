import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import userRouter from './routes/users.js';

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/users', userRouter);

export default app;