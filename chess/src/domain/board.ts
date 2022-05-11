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
      }
    }
  }

  private asignPieces(color: Color, file: NFile, rank: Rank) {
    if (rank == 1 || rank == 8) {
      if (file == 1 || file == 8) {
        this.cells.push(new Rook(color, new Position(file, rank)))
      } else if (file == 2 || file == 7) {
        this.cells.push(new Knight(color, new Position(file, rank)))
      } else if (file == 3 || file == 6) {
        this.cells.push(new Bishop(color, new Position(file, rank)))
      } else if (file == 4) {
        this.cells.push(new Queen(color, new Position(file, rank)))
      } else {
        this.cells.push(new King(color, new Position(file, rank)))
      }
    } else if (rank == 2 || rank == 7) {
      this.cells.push(new Pawn(color, new Position(file, rank)))
    }
  }

  move(start: Position, end: Position) {
    const piece = this.cells.find((piece) => piece.equalPosition(start))
    if (!piece) throw new Error("Piece don't found on this position") 
    piece.moveTo(end)
  }
}
