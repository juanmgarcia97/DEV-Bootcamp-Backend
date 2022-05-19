import { injectable, inject } from 'inversify';
import { Color, TYPES, GameStatus } from '../domain/types';
import Game from '../domain/game';
import IGameRepository from '../repository/game.repository';
import Movement from '../domain/movement';
import GameService from './game.service';
import Board from '../domain/board';

@injectable()
export default class GameServiceImp implements GameService {
  private game!: Game;
  private gameRepository: IGameRepository;

  constructor(@inject(TYPES.GameRepository) gameRepository: IGameRepository) {
    this.gameRepository = gameRepository;
  }

  movePiece(turn: Color, movement: Movement): void {
    this.game.movePiece(turn, movement);
  }

  getGameStatus(): GameStatus {
    return this.game.status;
  }

  initGame(): GameStatus {
    const board = new Board();
    this.game = new Game(board);
    return this.game.status;
  }

  resetGame(): void {
    this.game = new Game(new Board)
  }

  saveGame(game: Game): void {
    this.gameRepository.saveGame(game);
  }

  loadGame(id: number): Game {
    return this.gameRepository.loadGame(id);
  }
}
