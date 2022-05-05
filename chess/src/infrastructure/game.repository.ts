import game from '../game';
import IGameRepository from '../repository/igame.repository';

export default class GameRepository implements IGameRepository {
  saveGame(game: game): void {
    throw new Error('Method not implemented.');
  }
  resetGame(game: game): void {
    throw new Error('Method not implemented.');
  }
  loadGame(id: number): game {
    throw new Error('Method not implemented.');
  }
  finishGame(game: game): void {
    throw new Error('Method not implemented.');
  }
}
