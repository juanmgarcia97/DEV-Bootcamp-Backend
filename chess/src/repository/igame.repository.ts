import Game from '../domain/game';

export default interface IGameRepository {
  saveGame(game: Game): void;
  resetGame(): void;
  loadGame(id: number): Game;
  finishGame(game: Game): void;
  initGame(): Game;
  getGame(): Game;
}
