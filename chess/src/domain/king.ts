import Piece from './piece';
import { Position } from './position';
import { Color, Rank, File, Type } from './types';

export default class King extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position);
    this.type = 'King';
    this.alive = true
  }
  canMoveTo(position: Position): boolean {
    return (
      Math.abs(this.position.getRank - position.getRank) <= 1 &&
      Math.abs(
        this.position.getFile.charCodeAt(0) - position.getFile.charCodeAt(0)
      ) <= 1 &&
      !(
        this.position.getFile == position.getFile &&
        this.position.getRank == position.getRank
      )
    );
  }
}
