import { Position } from './position';
import { Color, Type } from './types';

export default abstract class Piece {
  protected type!: Type;
  protected alive!: boolean;
  protected position: Position;
  constructor(private readonly color: Color, position: Position) {
    this.position = position;
  }

  get getPosition() {
    return this.position;
  }

  get getType() {
    return this.type;
  }

  get getColor() {
    return this.color;
  }

  moveTo(position: Position) {
    this.position = position;
  }

  equalPosition(position: Position) {
    return (this.position.getFile === position.getFile &&
      this.position.getRank === position.getRank)
  }

  abstract canMoveTo(position: Position): boolean;
}
