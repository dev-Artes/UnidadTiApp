import { getUsers } from "../services";
import type { CheckUserExistsPayload, User } from "../types/entidades";

export const checkUserExists = async ( user: CheckUserExistsPayload ): Promise<boolean> => {
    const users = await getUsers()

    return users.some( (existingUser: User) => existingUser.email === user.email
    )
}