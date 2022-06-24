import User from '../domain/user';

export interface UserRepository {
  findAll(): Promise<User[]>;
  createUser(user: User): Promise<User>;
  findUserById(id: number): Promise<User>;
  updateUser(user: User): Promise<User>;
  deleteUser(id: number): Promise<void>;
}
