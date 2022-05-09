import Board from './board';
import Player from './player';

export default class Game {
  private player1!: Player;
  private player2!: Player;
  
  constructor(private board: Board) {
    this.initPlayers() 
  }

  get getBoard(): Board {
    return this.board;
  }

  set setBoard(board: Board) {
    this.board = board;
  }

  initPlayers() {
    this.player1 = new Player('Black', false)
    this.player2 = new Player('White', true)  
  }
}
