import express from 'express';

const userRouter = express.Router();

userRouter.get('/', function(req, res, next) {
  res.status(200).json({ message: "Users" });
});

export default userRouter;