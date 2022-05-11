import Piece from './piece';
import { File, Rank, NFile } from './types';

export class Position {
  private file: File;

  constructor(file: File | NFile, private rank: Rank) {
    if(typeof file === 'number')
      this.file = String.fromCharCode(file + 64) as File
    else
      this.file = file;
    // this.piece = piece;
  }

  // setPiece(piece: Piece) {
  //   this.piece = piece;
  // }

  // get getPiece() {
  //   return this.piece;
  // }

  get getFile() {
    return this.file;
  }

  get getRank() {
    return this.rank;
  }
}
