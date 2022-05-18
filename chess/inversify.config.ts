import { Container } from 'inversify';
import { TYPES } from './src/domain/types';
import IGameRepository from './src/repository/game.repository';

let container = new Container();

container.bind<IGameRepository>(TYPES.IGameRepository);

export default container;
