import Piece from './piece';
import { Position } from './position';
import { Color, Rank, File, Type } from './types';

export default class Rook extends Piece {
  private type: Type;
  constructor(color: Color, file: File, rank: Rank) {
    super(color, file, rank);
    this.type = 'Rook';
  }
  canMoveTo(position: Position): boolean {
    if (
      this.position.getFile === position.getFile &&
      this.position.getRank === position.getRank
    )
      return false;
    return (
      this.position.getRank === position.getRank ||
      this.position.getFile.charCodeAt(0) === position.getFile.charCodeAt(0)
    );
  }
}
