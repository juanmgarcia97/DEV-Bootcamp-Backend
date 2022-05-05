import Piece from './piece';
import { Position } from './position';
import { Color, Rank, File, Type } from './types';

export default class Bishop extends Piece {
  private type: Type;
  constructor(color: Color, file: File, rank: Rank) {
    super(color, file, rank);
    this.type = 'Bishop';
  }
  canMoveTo(position: Position): boolean {
    if (
      this.position.getFile === position.getFile &&
      this.position.getRank === position.getRank
    )
      return false;
    return (
      Math.abs(this.position.getRank - position.getRank) ==
      Math.abs(
        this.position.getFile.charCodeAt(0) - position.getFile.charCodeAt(0)
      )
    );
  }
}
