import Board from './domain/board';

export default class Game {
  constructor(private board: Board) {}

  get getBoard(): Board {
    return this.board;
  }
}
