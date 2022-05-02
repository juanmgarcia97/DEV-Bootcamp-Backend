import user from "../domain/user";
import { IUserService } from "./user.service.interface";
import { IUserRepository } from '../repository/user.repository.interface';
import container from '../../inversify.config';
import TYPES from "../infrastructure/types";

export class UserService implements IUserService {

    private userRepository: IUserRepository;

    constructor() {
        this.userRepository = container.get<IUserRepository>(TYPES.IUserRepository)
    }
    getUsers(): Promise<user[]> {
        return this.userRepository.getAll()
    }
    getUserById(id: string): Promise<user> {
        return this.userRepository.findById(id);
    }
    saveUser(user: user): Promise<user> {
        return this.userRepository.save(user);
    }
    deleteUser(id: string): Promise<boolean> {
        return this.userRepository.delete(id);
    }

}