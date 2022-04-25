import Piece from './piece';
import { Position } from './position';

export default class Queen extends Piece {
  canMoveTo(position: Position): boolean {
    const vertical = Math.abs(this.position.getRank() - position.getRank());
    const horizontal = Math.abs(
      this.position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0)
    );
    return (
      (vertical == 0 && horizontal >= 0) ||
      (vertical >= 0 && horizontal == 0) ||
      vertical == horizontal
    );
  }
}
