import express from 'express';
import { serverConfig } from './config/index.js';
import { logger } from './config/logger.config.js';
import { attachCorrelationIdMiddleware } from './middlewares/correlation.middleware.js';
import { genericErrorHandler } from './middlewares/error.middleware.js';
import v1Router from './routers/v1/index.router.js';
import v2Router from './routers/v2/index.router.js';
import sequelize from './db/modeles/sequelize.js';
import { Hotel } from './db/modeles/hotel.js';


const app = express();

app.use(express.json());

app.use(attachCorrelationIdMiddleware);

/**
 * Registering all the routers and their corresponding routes with out app server object.
 */
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);
app.use(genericErrorHandler);


app.listen(serverConfig.PORT, async () => {
    console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
    logger.info(`Press Ctrl+C to stop the server.`);
    await sequelize.authenticate();
    logger.info("database connectioin has been established successfully.");
});