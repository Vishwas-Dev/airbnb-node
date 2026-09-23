import express from 'express';
import { createHotelHandler, deleteHotelsdHandler, getAllHotelsdHandler, getHotelByIdHandler, updateHotelsdHandler } from '../../controllers/hotel.controllers.js';
import { hotelSchema } from '../../validator/hotel.validator.js';
import { validateRequestBody } from '../../validator/index.js';


const hotelRouter = express.Router();

hotelRouter.post(
    '/', 
    validateRequestBody(hotelSchema),
    createHotelHandler);
    
    hotelRouter.get(
        '/all', 
        getAllHotelsdHandler);
        
        hotelRouter.delete(
            '/:id', 
            deleteHotelsdHandler);
            
            hotelRouter.get(
                '/:id', 
                getHotelByIdHandler);

            hotelRouter.patch(
                '/:id', 
                updateHotelsdHandler);
                


export default hotelRouter;


