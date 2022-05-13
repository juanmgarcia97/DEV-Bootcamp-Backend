import Board from '../domain/board';
import Game from '../domain/game';
import { Position } from '../domain/position';
import { Color } from '../domain/types';
import IGameRepository from '../repository/igame.repository';

export default class GameRepository implements IGameRepository {
  private game!: Game;
  
  movePiece(turn: Color, start: Position, end: Position): boolean {
    let game = this.game
    return game.movePiece(turn, start, end);
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
    this.game.setBoard = new Board()
    this.game.initPlayers()
  }
  loadGame(id: number): Game {
    throw new Error('Method not implemented.');
  }
  finishGame(game: Game): void {
    throw new Error('Method not implemented.');
  }
}
