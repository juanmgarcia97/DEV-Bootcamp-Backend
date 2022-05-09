import { injectable, inject } from 'inversify';
import { TYPES } from '../domain/types';
import Game from '../domain/game';
import IGameRepository from '../repository/igame.repository';

@injectable()
export default class GameService {
  private gameRepository: IGameRepository;

  constructor(@inject(TYPES.IGameRepository) gameRepository: IGameRepository) {
    this.gameRepository = gameRepository;
  }

  get game(): Game {
    return this.gameRepository.getGame();
  }

  initGame(): Game {
    return this.gameRepository.initGame()
  }
  saveGame(game: Game): void {
    this.gameRepository.saveGame(game);
  }
  resetGame(): void {
    this.gameRepository.resetGame();
  }
  loadGame(id: number): Game {
    return this.gameRepository.loadGame(id);
  }
  finishGame(game: Game): void {
    this.gameRepository.finishGame(game);
  }
}
