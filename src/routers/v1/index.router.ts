import express from 'express';
import pingRouter from './ping.router.js';
import hotelRouter from './hotel.router.js';
import userRouter from './user.router.js';

const v1Router = express.Router();

v1Router.use('/ping', pingRouter);
v1Router.use('/hotels', hotelRouter);
v1Router.use('/user', userRouter);


export default v1Router;


