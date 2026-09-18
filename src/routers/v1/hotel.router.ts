import express from 'express';
import { createHotelHandler, getHotelByIdHandler } from '../../controllers/hotel.controllers.js';


const hotelRouter = express.Router();

hotelRouter.post('/', createHotelHandler);
hotelRouter.get('/:id', getHotelByIdHandler);


export default hotelRouter;


