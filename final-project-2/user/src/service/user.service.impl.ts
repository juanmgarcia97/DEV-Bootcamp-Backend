import { inject, injectable } from 'inversify';
import EmptyProperty from '../domain/exceptions/emptyProperty';
import EmptyUser from '../domain/exceptions/emptyUser';
import EmptyUserId from '../domain/exceptions/emptyUserId';
import User from '../domain/user';
import { UserRepository } from '../repository/user.repository';
import { UserService } from './user.service';

@injectable()
export default class UserServiceImpl implements UserService {
  @inject('UserRepository') userRepository!: UserRepository;

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async createUser(user: User): Promise<User> {
    return await this.userRepository.createUser(user);
  }

  async findUserByNickname(nickname: string): Promise<User[]> {
    return await this.userRepository.findUserByNickname(nickname);
  }

  async findUserByFullName(fullName: string): Promise<User[]> {
    return await this.userRepository.findUserByFullName(fullName);
  }

  async updateUser(id: string, user: User): Promise<User> {
    return await this.userRepository.updateUser(id, user);
  }

  async deleteUser(id: string): Promise<void> {
    await this.userRepository.deleteUser(id);
  }
}
