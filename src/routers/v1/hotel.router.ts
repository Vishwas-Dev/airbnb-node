import express from 'express';
import { createHotelHandler, getHotelByIdHandler } from '../../controllers/hotel.controllers.js';
import { hotelSchema } from '../../validator/hotel.validator.js';
import { validateRequestBody } from '../../validator/index.js';


const hotelRouter = express.Router();

hotelRouter.post(
    '/', 
    validateRequestBody(hotelSchema),
    createHotelHandler);

hotelRouter.get(
    '/:id', 
    getHotelByIdHandler);


export default hotelRouter;


