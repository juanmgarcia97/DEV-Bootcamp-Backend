import { injectable, inject } from 'inversify';
import { TYPES } from '../domain/types';
import Game from '../game';
import IGameRepository from '../repository/igame.repository';

@injectable()
export default class GameService {
  private gameRepository: IGameRepository;

  constructor(@inject(TYPES.IGameRepository) gameRepository: IGameRepository) {
    this.gameRepository = gameRepository;
  }

  saveGame(game: Game): void {
    this.gameRepository.saveGame(game);
  }
  resetGame(game: Game): void {
    this.gameRepository.resetGame(game);
  }
  loadGame(id: number): Game {
    return this.gameRepository.loadGame(id);
  }
  finishGame(game: Game): void {
    this.gameRepository.finishGame(game);
  }
}
