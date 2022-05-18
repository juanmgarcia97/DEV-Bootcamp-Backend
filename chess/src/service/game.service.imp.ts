import { injectable, inject } from 'inversify';
import { Color, TYPES } from '../domain/types';
import Game from '../domain/game';
import IGameRepository from '../repository/game.repository';
import Movement from '../domain/movement';

@injectable()
export default class GameServiceImp {
  private gameRepository: IGameRepository;

  constructor(@inject(TYPES.IGameRepository) gameRepository: IGameRepository) {
    this.gameRepository = gameRepository;
  }

  get game(): Game {
    return this.gameRepository.getGame();
  }

  initGame() {
    return this.gameRepository.initGame();
  }

  movePiece(turn: Color, movement: Movement): void {
    this.gameRepository.movePiece(turn, movement);
  }
  // saveGame(game: Game): void {
  //   this.gameRepository.saveGame(game);
  // }
  resetGame(): void {
    this.gameRepository.resetGame();
  }
  // loadGame(id: number): Game {
  //   return this.gameRepository.loadGame(id);
  // }
  // finishGame(game: Game): void {
  //   this.gameRepository.finishGame(game);
  // }
}
