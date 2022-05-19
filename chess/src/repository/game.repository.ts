import Game from '../domain/game';

export default interface GameRepository {
  saveGame(game: Game): void;
  loadGame(id: number): Game;
}
