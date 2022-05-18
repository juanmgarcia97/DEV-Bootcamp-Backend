import Game from '../domain/game';
import Movement from '../domain/movement';
import { Color } from '../domain/types';

export default interface IGameRepository {
  saveGame(game: Game): void;
  resetGame(): void;
  loadGame(id: number): Game;
  finishGame(game: Game): void;
  initGame(): object;
  getGame(): Game;
  movePiece(turn: Color, movement: Movement): void;
}
