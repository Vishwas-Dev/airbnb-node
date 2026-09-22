import express from 'express';
import { pingHandler } from '../../controllers/ping.controller.js';
import { validateRequestBody } from '../../validator/index.js';
import { pingSchema } from '../../validator/ping.validator.js';
import { StatusCodes } from 'http-status-codes';



const pingRouter = express.Router();

pingRouter.get(
    "/",
    validateRequestBody(pingSchema),
    pingHandler
  );

pingRouter.get('/health', (req, res) => {
    res.status(StatusCodes.OK).send('OK');

});

export default pingRouter;