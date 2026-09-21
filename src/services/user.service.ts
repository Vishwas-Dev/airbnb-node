import { logger } from "../config/logger.config.js";
import User from "../db/modeles/user.js";
import { CreateUserDTO } from "../dto/user.dto.js";
import { createUser, getUserById } from "../repository/user.repository.js";
import { NotFoundError } from "../utilis/error/app.error.js";

 export async function getUserByEmail(email: string) {
  return await User.findOne({
    where: { email },
  });
}


export async function createUserService(userData: CreateUserDTO){

    const existingUser = await getUserByEmail(userData.email);

  if (existingUser) {
        logger.error(`gmail is already exists ${userData.email}`);
            throw new NotFoundError(`user with ${userData.email} already exists`); 
  }

    const user = await createUser(userData);
    return user;
}

    export async function getUserByIdService(id: number){
        const user = await getUserById(id);
        return user;
    }

   

