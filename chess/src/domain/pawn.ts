import Piece from './piece';
import { Position } from './position';
import { Color, Rank, File, Type } from './types';

export default class Pawn extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position);
    this.type = 'Pawn';
    this.alive = true
  }
  canMoveTo(position: Position): boolean {
    throw new Error('Method not implemented.');
  }
}
