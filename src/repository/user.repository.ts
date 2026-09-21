import User from "../db/modeles/user.js";
import type {CreateUserDTO} from "../dto/user.dto.js";
import { logger } from "../config/logger.config.js";
import { NotFoundError } from "../utilis/error/app.error.js";   

export async function createUser( userData: CreateUserDTO){
    const user = await User.create({
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        address: userData.address
    });
    logger.info(`User Created: ${user.id}`);
    return user;
}

export async function getUserById(id: number){
    const user = await User.findByPk(id);
    if (!user) {
        logger.error(`User not found ${id}`);
        throw new NotFoundError(`User with ${id} not found`);
    }
    return user;
}   