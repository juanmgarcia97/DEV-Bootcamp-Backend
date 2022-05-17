import Piece from './piece';
import { Position } from './position';
import { Color } from './types';

export default class Pawn extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position);
    this.type = 'Pawn';
    this.alive = true
  }
  canMoveTo(position: Position): boolean {
    const initialBlack = position.getRank === 7
    const initialWhite = position.getRank === 2
    const directionBlack = -1
    const directionWhite = 1
    const oneStepWhite = this.position.getRank + directionWhite === position.getRank
    const twoStepWhite = this.position.getRank + directionWhite * 2 === position.getRank
    const oneStepBlack = this.position.getRank + directionBlack === position.getRank
    const twoStepBlack = this.position.getRank + directionBlack * 2 === position.getRank

    return (initialBlack && (oneStepBlack || twoStepBlack)) || (initialWhite && (oneStepWhite || twoStepWhite))
  }
}
