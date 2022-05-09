import Board from '../domain/board';
import Game from '../domain/game';
import IGameRepository from '../repository/igame.repository';

export default class GameRepository implements IGameRepository {
  private game!: Game;

  getGame(): Game {
    return this.game;
  }

  initGame(): Game {
    let board = new Board();
    this.game = new Game(board);
    return this.game;
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
