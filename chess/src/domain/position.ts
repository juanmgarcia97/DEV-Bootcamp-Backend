import Piece from './piece';
import { File, Rank, NFile } from './types';

export class Position {

  private file: File;

  constructor(file: File | NFile, private rank: Rank) {
    const charCodeBeforeA: number = 64;
    if (typeof file === 'number') {
      this.file = file < charCodeBeforeA ?
        String.fromCharCode(file + charCodeBeforeA) as File :
        String.fromCharCode(file) as File;
    } else
      this.file = file;
  }

  get getFile() {
    return this.file;
  }

  get getRank() {
    return this.rank;
  }
}
