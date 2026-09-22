import { NextFunction, Request, Response } from "express";
import { createHotelService, getAllHotelsService, getHotelByIdService } from "../services/hotel.service.js";
import { NotFoundError } from "../utilis/error/app.error.js";
import { StatusCodes } from "http-status-codes";

export async function createHotelHandler( req: Request,res : Response, next: NextFunction) {
     // call the service layer
     const hotelResponse = await createHotelService(req.body);

    // send the response
      res.status(StatusCodes.CREATED).json({
        message: "hotel created successfully ",
        data: hotelResponse,
        success: true
    });
}
export async function getHotelByIdHandler( req: Request,res : Response, next: NextFunction) {
     // call the service layer
     const hotelResponse = await getHotelByIdService(Number(req.params.id));

    // send the response
      res.status(StatusCodes.OK).json({
        message: "hotel found successfully ",
        data: hotelResponse,
        success: true
    });
}


export async function getAllHotelsdHandler( req: Request,res : Response, next: NextFunction){
 const  hotelRespones = await getAllHotelsService();
//  return hotelRespones;

  // send the response
    if (hotelRespones.length === 0) {
        throw new NotFoundError("No hotels found");
    }
      res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "all hotel found successfully ",
        data: hotelRespones,
        success: true
    });

}

