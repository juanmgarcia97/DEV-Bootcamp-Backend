import Piece from './piece';
import { Position } from './position';
import { Color, Rank, File, Type } from './types';

export default class Knight extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position);
    this.type = 'Knight';
    this.alive = true
  }
  canMoveTo(position: Position): boolean {
    const horizontal = Math.abs(this.position.getRank - position.getRank);
    const vertical = Math.abs(
      this.position.getFile.charCodeAt(0) - position.getFile.charCodeAt(0)
    );
    if (
      this.position.getFile === position.getFile &&
      this.position.getRank === position.getRank
    )
      return false;
    return vertical * vertical + horizontal * horizontal == 5;
  }
}
