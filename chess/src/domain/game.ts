import Board from './board';
import Player from './player';
import { Position } from './position';
import { Color, GameStatus, State } from './types';
import KingExposed from './exceptions/kingExposed';
import InvalidTurn from './exceptions/invalidTurn';
import Movement from './movement';

export default class Game {
  private player1!: Player;
  private player2!: Player;
  private turn!: Color;
  private state!: State;

  constructor(private board: Board) {
    this.initPlayers();
  }

  get getBoard(): Board {
    return this.board;
  }

  set setBoard(board: Board) {
    this.board = board;
  }

  get status(): GameStatus {
    const gameStatus: GameStatus = {
      state: this.state,
      turn: this.turn,
      players: [
        this.player1,
        this.player2,
      ],
      board: this.board,
    }
    return gameStatus;
  }

  private changeTurn() {
    if (this.turn === 'White') {
      this.turn = 'Black';
      this.player1.passTurn(this.player2);
    } else {
      this.turn = 'White';
      this.player2.passTurn(this.player1);
    }
  }

  private initPlayers() {
    this.player1 = new Player('Black', false);
    this.player2 = new Player('White', true);
    this.turn = 'White';
    this.state = 'Ready';
  }

  private verifyTurn(turn: Color) {
    if (turn !== this.turn) throw new InvalidTurn();
  }

  private verifyCheckMate(turn: Color, movement: Movement) {
    if (this.board.checkMate(turn, movement)) throw new KingExposed();
  }

  movePiece(turn: Color, movement: Movement) {
    this.verifyTurn(turn);
    this.verifyCheckMate(turn, movement);
    this.board.move(movement);
    if (this.state === 'Ready') this.state = 'Playing';
    this.changeTurn();
  }
}

