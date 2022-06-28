import { injectable } from 'inversify';
import { Repository } from 'typeorm';
import UserNotFound from '../domain/exceptions/userNotFound';
import User from '../domain/user';
import { UserRepository } from '../repository/user.repository';
import { AppDataSource } from './persistence/db.config';
import UserEntity from './persistence/entities/user.entity';
import UserMapper from './persistence/mappers/user.mapper';

@injectable()
export default class UserRepositoryImpl implements UserRepository {
  private userRepositoryORM: Repository<UserEntity>;

  constructor() {
    this.userRepositoryORM = AppDataSource.getRepository(UserEntity);
  }

  async findAll(): Promise<User[]> {
    const userEntities = await this.userRepositoryORM.find();
    return UserMapper.toDomainList(userEntities);
  }

  async createUser(user: User): Promise<User> {
    const userEntity = await this.userRepositoryORM.save(
      UserMapper.toEntity(user)
    );
    return UserMapper.toDomain(userEntity);
  }

  async findUserById(id: string): Promise<User> {
    const userEntity = await this.userRepositoryORM.findOneBy({ id });
    if (!userEntity) throw new UserNotFound();
    return UserMapper.toDomain(userEntity);
  }

  async findUserByNickname(nickname: string): Promise<User> {
    const userEntity = await this.userRepositoryORM.findOneBy({ nickname });
    if (!userEntity) throw new UserNotFound();
    return UserMapper.toDomain(userEntity);
  }

  async findUserByFullName(fullName: string): Promise<User> {
    const userEntity = await this.userRepositoryORM.findOneBy({ fullName });
    if (!userEntity) throw new UserNotFound();
    return UserMapper.toDomain(userEntity);
  }

  async updateUser(id: string, user: User): Promise<User> {
    user.id = id;
    await this.userRepositoryORM.update(id, UserMapper.toEntity(user));
    return user;
  }

  async deleteUser(id: string): Promise<void> {
    const user = await this.findUserById(id);
    await this.userRepositoryORM.remove(UserMapper.toEntity(user));
  }
}
