import Board from './board';
import Player from './player';
import { Position } from './position';
import { Color, State } from './types';
import KingExposed from './exceptions/kingExposed';

export default class Game {
  private player1!: Player;
  private player2!: Player;
  private turn!: Color;
  private state!: State;

  constructor(private board: Board) {
    this.initPlayers()
  }

  get getBoard(): Board {
    return this.board;
  }

  set setBoard(board: Board) {
    this.board = board;
  }

  get status() {
    return {
      state: this.state,
      turn: this.turn,
      players: {
        player1: this.player1,
        player2: this.player2,
      },
      board: this.board,
    }
  }

  changeTurn() {
    if (this.turn === 'White') {
      this.turn = 'Black';
      this.player1.passTurn(this.player2);
    } else {
      this.turn = 'White';
      this.player2.passTurn(this.player1);
    }
  }

  initPlayers() {
    this.player1 = new Player('Black', false);
    this.player2 = new Player('White', true);
    this.turn = 'White';
    this.state = 'Ready';
  }

  movePiece(turn: Color, start: Position, end: Position) {
    if (turn === this.turn) {
      if(this.board.checkMate(turn, start, end)) throw new KingExposed();
      this.board.move(start, end);
      this.changeTurn();
      if(this.state === 'Ready') this.state = 'Playing';
      return true;
    }
    return false;
  }
}
