import express from "express";
import { createUserHandler, getUserByIdHandler } from "../../controllers/user.controllers.js";
import { userSchema } from "../../validator/user.validator.js";
import { validateRequestBody } from "../../validator/index.js";

const userRouter = express.Router();

userRouter.post('/',
    validateRequestBody(userSchema),
    createUserHandler);

userRouter.get(
    '/:id', 
    getUserByIdHandler);

    export default userRouter;

