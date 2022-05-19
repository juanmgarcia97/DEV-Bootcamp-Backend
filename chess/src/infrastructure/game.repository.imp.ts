import { injectable } from 'inversify';
import Game from '../domain/game';
import GameRepository from '../repository/game.repository';

@injectable()
export default class GameRepositoryImp implements GameRepository {

  saveGame(game: Game): void {
    throw new Error('Method not implemented.');
  }

  loadGame(id: number): Game {
    throw new Error('Method not implemented.');
  }

  finishGame(game: Game): void {
    throw new Error('Method not implemented.');
  }
}
