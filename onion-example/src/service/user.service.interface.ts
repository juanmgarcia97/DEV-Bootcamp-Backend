import User from "../domain/user";

export interface IUserService {
    getUsers(): Promise<User[]>
    getUserById(id: string): Promise<User>

    saveUser(user: User): Promise<User>
    deleteUser(id: string): Promise<boolean>
}