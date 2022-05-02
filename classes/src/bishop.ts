import Piece from './piece';
import { Position } from './position';

export default class Bishop extends Piece {
  canMoveTo(position: Position): boolean {
    if (
      this.position.getFile() === position.getFile() &&
      this.position.getRank() === position.getRank()
    )
      return false;
    return (
      Math.abs(this.position.getRank() - position.getRank()) ==
      Math.abs(
        this.position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0)
      )
    );
  }
}
