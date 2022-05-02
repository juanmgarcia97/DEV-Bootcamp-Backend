import { Container } from 'inversify';
import { IUserRepository } from './src/repository/user.repository.interface';
import TYPES from './src/infrastructure/types';
import { UserRepository } from './src/infrastructure/user.repository';

let container = new Container();

container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);

export default container;