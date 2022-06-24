import { Container } from 'inversify';
import { UserRepository } from './src/repository/user.repository';
import UserRepositoryImpl from './src/infrastructure/user.repository.impl';
import { UserService } from './src/service/user.service';
import UserServiceImpl from './src/service/user.service.impl';
const container = new Container();

container.bind<UserRepository>('UserRepository').to(UserRepositoryImpl);
container.bind<UserService>('UserService').to(UserServiceImpl);

export default container;
