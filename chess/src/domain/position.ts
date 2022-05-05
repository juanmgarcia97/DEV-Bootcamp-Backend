import { File, Rank } from './types';

export class Position {
  constructor(private file: File, private rank: Rank) {}

  get getFile() {
    return this.file;
  }

  get getRank() {
    return this.rank;
  }
}
