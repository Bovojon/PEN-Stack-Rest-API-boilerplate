import userRouter from './user.js';

const routes = (app) => {
  app.use('/users', userRouter)
}

export default routes;