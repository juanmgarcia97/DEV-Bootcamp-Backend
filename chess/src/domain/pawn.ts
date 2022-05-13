import Piece from './piece';
import { Position } from './position';
import { Color, Rank, File, Type } from './types';

export default class Pawn extends Piece {
  constructor(color: Color, position: Position) {
    super(color, position);
    this.type = 'Pawn';
    this.alive = true
  }
  canMoveTo(position: Position): boolean {
    const initialBlack = position.getRank === 7
    const initialWhite = position.getRank === 2
    const moveBlack = -1
    const moveWhite = 1
    const oneStepWhite = this.position.getRank + moveWhite === position.getRank
    const twoStepWhite = this.position.getRank + moveWhite * 2 === position.getRank
    const oneStepBlack = this.position.getRank + moveBlack === position.getRank
    const twoStepBlack = this.position.getRank + moveBlack * 2 === position.getRank

    return (initialBlack && (oneStepBlack || twoStepBlack)) || (initialWhite && (oneStepWhite || twoStepWhite))
  }
}
