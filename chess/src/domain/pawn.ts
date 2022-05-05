import Piece from './piece';
import { Position } from './position';

export default class Pawn extends Piece {
  canMoveTo(position: Position): boolean {
    throw new Error('Method not implemented.');
  }
}
