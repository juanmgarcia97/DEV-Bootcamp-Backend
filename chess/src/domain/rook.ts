import Piece from './piece';
import { Position } from './position';

export default class Rook extends Piece {
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