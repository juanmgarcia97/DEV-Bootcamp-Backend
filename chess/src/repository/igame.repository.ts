import Game from '../domain/game';
import { Position } from '../domain/position';
import { Color } from '../domain/types';

export default interface IGameRepository {
  saveGame(game: Game): void;
  resetGame(): void;
  loadGame(id: number): Game;
  finishGame(game: Game): void;
  initGame(): Game;
  getGame(): Game;
  movePiece(turn: Color, start: Position, end: Position): boolean;
}
