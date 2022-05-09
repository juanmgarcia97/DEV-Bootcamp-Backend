import Piece from './piece';
import { Position } from './position';
import { Color, Rank, File, Type } from './types';

export default class Pawn extends Piece {
  constructor(color: Color, file: File, rank: Rank) {
    super(color, file, rank);
    this.type = 'Pawn';
    this.alive = true
  }
  canMoveTo(position: Position): boolean {
    throw new Error('Method not implemented.');
  }
}
