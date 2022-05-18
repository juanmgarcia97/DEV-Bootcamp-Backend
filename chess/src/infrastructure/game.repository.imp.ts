import Board from '../domain/board';
import Game from '../domain/game';
import Movement from '../domain/movement';
import { Color } from '../domain/types';
import IGameRepository from '../repository/game.repository';

export default class GameRepositoryImp implements IGameRepository {
  private game!: Game;

  movePiece(turn: Color, movement: Movement): void {
    let game = this.game;
    game.movePiece(turn, movement);
  }

  getGame(): Game {
    return this.game;
  }

  initGame() {
    let board = new Board();
    this.game = new Game(board);
    return this.game.status;
  }
  saveGame(game: Game): void {
    throw new Error('Method not implemented.');
  }
  resetGame(): void {
    this.game.setBoard = new Board();
    this.game.initPlayers();
  }
  loadGame(id: number): Game {
    throw new Error('Method not implemented.');
  }
  finishGame(game: Game): void {
    throw new Error('Method not implemented.');
  }
}
