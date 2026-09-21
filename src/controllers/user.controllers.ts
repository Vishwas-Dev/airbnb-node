import { NextFunction, Request, Response } from "express";
import { createUserService, getUserByIdService } from "../services/user.service.js";

export async function createUserHandler( req: Request,res : Response, next: NextFunction) {
     // call the service layer
     const userResponse = await createUserService(req.body);

    // send the response
      res.status(201).json({
        message: "User created successfully ",
        data: userResponse,
        success: true
    });
}
export async function getUserByIdHandler( req: Request,res : Response, next: NextFunction) {
     // call the service layer
     const userResponse = await getUserByIdService(Number(req.params.id));

    // send the response
      res.status(200).json({
        message: "User found successfully ",
        data: userResponse,
        success: true
    });
}