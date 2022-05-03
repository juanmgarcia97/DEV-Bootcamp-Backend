import { Container } from 'inversify';
import { IUserRepository } from './src/repository/user.repository.interface';
import TYPES from './src/infrastructure/types';
import { UserRepository } from './src/infrastructure/user.repository.concrete';
import { IUserService } from './src/service/user.service.interface';
import { UserService } from './src/service/user.service.concrete';

let container = new Container();

container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);
container.bind<IUserService>(TYPES.IUserService).to(UserService);

export default container;
