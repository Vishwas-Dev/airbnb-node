import User from "../db/modeles/user.js";
import { CreateUserDTO } from "../dto/user.dto.js";
import { createUser, getUserById } from "../repository/user.repository.js";

 export async function getUserByEmail(email: string) {
  return await User.findOne({
    where: { email },
  });
}


export async function createUserService(userData: CreateUserDTO){

    const existingUser = await getUserByEmail(userData.email);

  if (existingUser) {
    throw new Error("User with this email already exists");
  }

    const user = await createUser(userData);
    return user;
}

    export async function getUserByIdService(id: number){
        const user = await getUserById(id);
        return user;
    }

   

