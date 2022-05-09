import Bishop from './bishop';
import King from './king';
import Knight from './knight';
import Pawn from './pawn';
import Queen from './queen';
import Rook from './rook';

export default class Board {
  private wKing!: King;
  private wQueen!: Queen;
  private w1Bishop!: Bishop;
  private w2Bishop!: Bishop;
  private w1Knight!: Knight;
  private w2Knight!: Knight;
  private w1Rook!: Rook;
  private w2Rook!: Rook;
  private w1Pawn!: Pawn;
  private w2Pawn!: Pawn;
  private w3Pawn!: Pawn;
  private w4Pawn!: Pawn;
  private w5Pawn!: Pawn;
  private w6Pawn!: Pawn;
  private w7Pawn!: Pawn;
  private w8Pawn!: Pawn;

  private bKing!: King;
  private bQueen!: Queen;
  private b1Bishop!: Bishop;
  private b2Bishop!: Bishop;
  private b1Knight!: Knight;
  private b2Knight!: Knight;
  private b1Rook!: Rook;
  private b2Rook!: Rook;
  private b1Pawn!: Pawn;
  private b2Pawn!: Pawn;
  private b3Pawn!: Pawn;
  private b4Pawn!: Pawn;
  private b5Pawn!: Pawn;
  private b6Pawn!: Pawn;
  private b7Pawn!: Pawn;
  private b8Pawn!: Pawn;

  constructor() {
    this.initBoard()
  }

  initBoard() {
    this.wKing = new King('White', 'E', 1);
    this.wQueen = new Queen('White', 'D', 1);
    this.w1Bishop = new Bishop('White', 'F', 1);
    this.w2Bishop = new Bishop('White', 'C', 1);
    this.w1Knight = new Knight('White', 'B', 1);
    this.w2Knight = new Knight('White', 'G', 1);
    this.w1Rook = new Rook('White', 'A', 1);
    this.w2Rook = new Rook('White', 'H', 1);
    this.w1Pawn = new Pawn('White', 'A', 2);
    this.w2Pawn = new Pawn('White', 'B', 2);
    this.w3Pawn = new Pawn('White', 'C', 2);
    this.w4Pawn = new Pawn('White', 'D', 2);
    this.w5Pawn = new Pawn('White', 'E', 2);
    this.w6Pawn = new Pawn('White', 'F', 2);
    this.w7Pawn = new Pawn('White', 'G', 2);
    this.w8Pawn = new Pawn('White', 'H', 2);

    this.bKing = new King('Black', 'E', 8);
    this.bQueen = new Queen('Black', 'D', 8);
    this.b1Bishop = new Bishop('Black', 'F', 8);
    this.b2Bishop = new Bishop('Black', 'C', 8);
    this.b1Knight = new Knight('Black', 'B', 8);
    this.b2Knight = new Knight('Black', 'G', 8);
    this.b1Rook = new Rook('Black', 'A', 8);
    this.b2Rook = new Rook('Black', 'H', 8);
    this.b1Pawn = new Pawn('Black', 'A', 7);
    this.b2Pawn = new Pawn('Black', 'B', 7);
    this.b3Pawn = new Pawn('Black', 'C', 7);
    this.b4Pawn = new Pawn('Black', 'D', 7);
    this.b5Pawn = new Pawn('Black', 'E', 7);
    this.b6Pawn = new Pawn('Black', 'F', 7);
    this.b7Pawn = new Pawn('Black', 'G', 7);
    this.b8Pawn = new Pawn('Black', 'H', 7);
  }
}
