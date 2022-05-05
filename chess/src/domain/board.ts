import Bishop from './bishop';
import King from './king';
import Knight from './knight';
import Queen from './queen';
import Rook from './rook';

export default class Board {
  private wKing: King;
  private wQueen: Queen;
  private w1Bishop: Bishop;
  private w2Bishop: Bishop;
  private w1Knight: Knight;
  private w2Knight: Knight;
  private w1Rook: Rook;
  private w2Rook: Rook;

  private bKing: King;
  private bQueen: Queen;
  private b1Bishop: Bishop;
  private b2Bishop: Bishop;
  private b1Knight: Knight;
  private b2Knight: Knight;
  private b1Rook: Rook;
  private b2Rook: Rook;

  constructor() {
    this.wKing = new King('White', 'E', 1);
    this.wQueen = new Queen('White', 'D', 1);
    this.w1Bishop = new Bishop('White', 'F', 1);
    this.w2Bishop = new Bishop('White', 'C', 1);
    this.w1Knight = new Knight('White', 'B', 1);
    this.w2Knight = new Knight('White', 'G', 1);
    this.w1Rook = new Rook('White', 'A', 1);
    this.w2Rook = new Rook('White', 'H', 1);

    this.bKing = new King('Black', 'E', 8);
    this.bQueen = new Queen('Black', 'D', 8);
    this.b1Bishop = new Bishop('Black', 'F', 8);
    this.b2Bishop = new Bishop('Black', 'C', 8);
    this.b1Knight = new Knight('Black', 'B', 8);
    this.b2Knight = new Knight('Black', 'G', 8);
    this.b1Rook = new Rook('Black', 'A', 8);
    this.b2Rook = new Rook('Black', 'H', 8);
  }
}
