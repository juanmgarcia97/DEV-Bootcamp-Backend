import Game from '../game';

export default interface IGameRepository {
  saveGame(game: Game): void;
  resetGame(game: Game): void;
  loadGame(id: number): Game;
  finishGame(game: Game): void;
}
