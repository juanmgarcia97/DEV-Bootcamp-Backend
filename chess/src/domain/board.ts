import Bishop from './bishop';
import King from './king';
import Knight from './knight';
import Pawn from './pawn';
import Queen from './queen';
import Rook from './rook';
import Piece from './piece';
import { Position } from './position';
import { Rank, File, Color, NFile } from './types';

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

  private cells!: Piece[];

  constructor() {
    this.init()
  }

  get getBoard() {
    return this.cells;
  }

  init() {
    this.cells = []
    let color: Color;
    for (let rank: Rank = 1; rank < 9; rank++) {
      for (let file: NFile = 1; file < 9; file++) {
        if (rank <= 2) {
          color = 'White'
          this.asignPieces(color, file as NFile, rank as Rank)
        } else if (rank >= 7) {
          color = 'Black'
          this.asignPieces(color, file as NFile, rank as Rank)
        }
        // else {
        //   this.cells.push(new Position(file as NFile, rank as Rank))
        // }
      }
    }
  }

  private asignPieces(color: Color, file: NFile, rank: Rank) {
    if (rank == 1 || rank == 8) {
      if (file == 1 || file == 8) {
        this.cells.push(/* new Position(file, rank, */ new Rook(color, new Position(file, rank)))
      } else if (file == 2 || file == 7) {
        this.cells.push(/* new Position(file, rank, */ new Knight(color, new Position(file, rank)))
      } else if (file == 3 || file == 6) {
        this.cells.push(/* new Position(file, rank, */ new Bishop(color, new Position(file, rank)))
      } else if (file == 4) {
        this.cells.push(/* new Position(file, rank, */ new Queen(color, new Position(file, rank)))
      } else {
        this.cells.push(/* new Position(file, rank, */ new King(color, new Position(file, rank)))
      }
    } else if (rank == 2 || rank == 7) {
      this.cells.push(/* new Position(file, rank,  */new Pawn(color, new Position(file, rank)))
    }
  }

  move(start: Position, end: Position) {
    const piece = this.cells.find((piece) => piece.equalPosition(start))
    if (!piece) throw new Error("Piece don't found on this position") 
    piece.moveTo(end)
  }
}
