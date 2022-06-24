import { inject, injectable } from 'inversify';
import user from '../domain/user';
import { UserService } from './user.service';

@injectable()
export default class UserServiceImpl implements UserService {
  @inject('UserRepository') userRepository!: UserService;

  async findAll(): Promise<user[]> {
    return await this.userRepository.findAll();
  }
  async createUser(user: user): Promise<user> {
    return await this.userRepository.createUser(user);
  }
  async findUser(id: number): Promise<user> {
    return await this.userRepository.findUser(id);
  }
  async updateUser(user: user): Promise<user> {
    return await this.userRepository.updateUser(user);
  }
  async deleteUser(id: number): Promise<void> {
    await this.userRepository.deleteUser(id);
  }
}
