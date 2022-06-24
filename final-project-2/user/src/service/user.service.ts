import User from '../domain/user';

export interface UserService {
  findAll(): Promise<User[]>;
  createUser(user: User): Promise<User>;
  findUser(id: number): Promise<User>;
  updateUser(user: User): Promise<User>;
  deleteUser(id: number): Promise<void>;
}
