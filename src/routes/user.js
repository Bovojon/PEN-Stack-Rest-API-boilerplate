import express from 'express';
import { findAll } from '../controllers/user.js';

const userRouter = express.Router();

userRouter.get('/', findAll);

export default userRouter;