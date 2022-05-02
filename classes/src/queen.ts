import Piece from './piece';
import { Position } from './position';

export default class Queen extends Piece {
  canMoveTo(position: Position): boolean {
    const bishop =
      Math.abs(this.position.getRank() - position.getRank()) ==
      Math.abs(
        this.position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0)
      );
    const rook =
      this.position.getRank() === position.getRank() ||
      this.position.getFile().charCodeAt(0) ===
        position.getFile().charCodeAt(0);
    if (
      this.position.getFile() === position.getFile() &&
      this.position.getRank() === position.getRank()
    )
      return false;
    return bishop || rook;
  }
}
