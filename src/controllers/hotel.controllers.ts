import { NextFunction, Request, Response } from "express";
import { createHotelService } from "../services/hotel.service.js";

export async function createHotel(res : Response, req: Request, next: NextFunction) {
     // call the service layer
     const hotelResponse = await createHotelService(req.body);


      res.status(200).json({
        message: "hotel created successfully ",
        data: hotelResponse,
        success: true
    });
}

