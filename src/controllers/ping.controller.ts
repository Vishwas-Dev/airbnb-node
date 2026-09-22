import { NextFunction, Request, Response } from "express";
import { logger } from "../config/logger.config.js";
import { StatusCodes } from "http-status-codes";

// import { AppError } from "../utilis/error/app.error.js";

export const pingHandler = async  ( req: Request, res: Response, next : NextFunction) => {
   logger.info("ping request received");
   res.status(StatusCodes.OK).json({message: "pong"});
}


