import user from "../models/user.model";
import {crateUserDTO} from "../dto/user.dto";
import { logger } from "../config/logger.config.js";
import { NotFoundError } from "../utilis/error/app.error.js";   

export async function createUser( userData: createUserDTO){
    const user = await user.create({
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        address: userData.address
    });
    logger.info(`User Created: ${user.id}`);
    return user;
}

export async function getUserByID(id: number){
    const user = await user.findByPk(id);
    if (!user) {
        logger.error(`User not found ${id}`);
        throw new NotFoundError(`User with ${id} not found`);
    }
    return user;
}   