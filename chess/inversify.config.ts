import { Container } from 'inversify';
import { TYPES } from './src/domain/types';
import IGameRepository from './src/repository/igame.repository';

let container = new Container();

container.bind<IGameRepository>(TYPES.IGameRepository);

export default container;
