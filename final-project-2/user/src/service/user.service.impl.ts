import { inject, injectable } from 'inversify';
import EmptyProperty from '../domain/exceptions/emptyProperty';
import EmptyUser from '../domain/exceptions/emptyUser';
import EmptyUserId from '../domain/exceptions/emptyUserId';
import user from '../domain/user';
import { UserRepository } from '../repository/user.repository';
import { UserService } from './user.service';

@injectable()
export default class UserServiceImpl implements UserService {
  @inject('UserRepository') userRepository!: UserRepository;

  async findAll(): Promise<user[]> {
    return await this.userRepository.findAll();
  }

  async createUser(user: user): Promise<user> {
    if (!user) throw new EmptyUser();
    return await this.userRepository.createUser(user);
  }

  async findUserByNickname(nickname: string): Promise<user> {
    if (!nickname) throw new EmptyProperty(nickname);
    return await this.userRepository.findUserByNickname(nickname);
  }

  async findUserByFullName(fullName: string): Promise<user> {
    if (!fullName) throw new EmptyProperty(fullName);
    return await this.userRepository.findUserByNickname(fullName);
  }

  async updateUser(id: string, user: user): Promise<user> {
    if (!id) throw new EmptyUserId();
    if (!user) throw new EmptyUser();
    return await this.userRepository.updateUser(id, user);
  }

  async deleteUser(id: string): Promise<void> {
    if (!id) throw new EmptyUserId();
    await this.userRepository.deleteUser(id);
  }
}
