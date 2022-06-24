import { injectable } from 'inversify';
import { Repository } from 'typeorm';
import UserNotFound from '../domain/exceptions/userNotFound';
import user from '../domain/user';
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

  async findAll(): Promise<user[]> {
    const userEntities = await this.userRepositoryORM.find();
    return UserMapper.toDomainList(userEntities);
  }

  async createUser(user: user): Promise<user> {
    const userEntity = await this.userRepositoryORM.save(
      UserMapper.toEntity(user)
    );
    return UserMapper.toDomain(userEntity);
  }

  async findUserById(id: number): Promise<user> {
    const userEntity = await this.userRepositoryORM.findOneBy({ id });
    if (!userEntity) throw new UserNotFound();
    return UserMapper.toDomain(userEntity);
  }

  async updateUser(user: user): Promise<user> {
    return await this.createUser(user);
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.findUserById(id);
    await this.userRepositoryORM.remove(UserMapper.toEntity(user));
  }
}
