import Piece from './piece';
import { File, Rank } from './types';

export class Position {
  private piece: Piece | undefined;

  constructor(private file: File, private rank: Rank, piece?: Piece) {
    this.piece = piece;
  }

  get getFile() {
    return this.file;
  }

  get getRank() {
    return this.rank;
  }
}
