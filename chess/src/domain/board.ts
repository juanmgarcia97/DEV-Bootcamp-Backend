import Bishop from './bishop';
import King from './king';
import Knight from './knight';
import Pawn from './pawn';
import Queen from './queen';
import Rook from './rook';
import Piece from './piece';
import { Position } from './position';
import { Rank, Color, NFile, File } from './types';
import InvalidPieceMovement from './exceptions/invalidPieceMovement';
import PieceNotFound from './exceptions/pieceNotFound';

export default class Board {
  private cells!: Piece[];

  constructor() {
    this.initBoard()
  }

  get getBoard() {
    return this.cells;
  }

  private initBoard(): void {
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

  private asignPieces(color: Color, file: NFile, rank: Rank): void {
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

  findPiece(position: Position): Piece {
    const piece = this.cells.find((piece) => piece.equalPosition(position))
    if (!piece) throw new PieceNotFound();
    return piece;
  }

  isPositionFree(position: Position): boolean {
    const piece = this.cells.find(piece => piece.equalPosition(position));
    if (!piece) return true;
    return false;
  }

  isPieceBlockingToMove(start: Position, end: Position): boolean {
    const fileDifference = start.getFile.charCodeAt(0) - end.getFile.charCodeAt(0);
    const rankDifference = start.getRank - end.getRank;
    const fileDifferenceAbs = Math.abs(fileDifference);
    const rankDifferenceAbs = Math.abs(rankDifference);
    const directionMovementFile = fileDifference > 0 ? -1 : fileDifference < 0 ? 1 : 0;
    const directionMovementRank = rankDifference > 0 ? -1 : rankDifference < 0 ? 1 : 0;
    const biggestMove = fileDifferenceAbs - rankDifferenceAbs > 0 ? fileDifferenceAbs : rankDifferenceAbs;
    let pieceBlocking = false;
    // for (let rank = 1; rank < Math.abs(rankDifference); rank++) {
    for (let pivot = 1; pivot < biggestMove; pivot++) {
      const movingPosition = new Position(
        String.fromCharCode(start.getFile.charCodeAt(0) + pivot * directionMovementFile) as File,
        (start.getRank + pivot * directionMovementRank) as Rank
      );
      if (!this.isPositionFree(movingPosition)) pieceBlocking = true;
    }
    // }
    // //Vertical move
    // if (fileDifference === 0) {
    //   //Move left
    //   if (rankDifference > 0) {
    //     for (let rank = 1; rank < rankDifference; rank++) {
    //       const movingPosition = new Position(start.getFile, start.getRank + rank as Rank)
    //       if (!this.isPositionFree(movingPosition)) pieceBlocking = true;
    //     }
    //     //Move right
    //   } else {
    //     for (let rank = 1; rank < Math.abs(rankDifference); rank++) {
    //       const movingPosition = new Position(start.getFile, start.getRank - rank as Rank)
    //       if (!this.isPositionFree(movingPosition)) pieceBlocking = true;
    //     }
    //   }
    // }
    // //Horizontal move
    // if (rankDifference === 0) {
    //   //Move left
    //   if (fileDifference > 0) {
    //     for (let file = 1; file < fileDifference; file++) {
    //       const movingPosition = new Position(String.fromCharCode(start.getFile.charCodeAt(0) + file) as File, start.getRank);
    //       if (!this.isPositionFree(movingPosition)) pieceBlocking = true;
    //     }
    //     //Move right
    //   } else {
    //     for (let file = 1; file < Math.abs(fileDifference); file++) {
    //       const movingPosition = new Position(String.fromCharCode(start.getFile.charCodeAt(0) - file) as File, start.getRank);
    //       if (!this.isPositionFree(movingPosition)) pieceBlocking = true;
    //     }
    //   }
    // }
    // //Diagonal move
    // if (rankDifference > 0) {

    // } else {
    //   for (let rank = 1; rank < Math.abs(rankDifference); rank++) {
    //     for (let file = 1; file < Math.abs(fileDifference); file++) {
    //       const movingPosition = new Position(String.fromCharCode(start.getFile.charCodeAt(0) + file) as File, start.getRank + rank as Rank)
    //       if (!this.isPositionFree(movingPosition)) pieceBlocking = true;
    //     }
    //   }
    // }
    return pieceBlocking;
  }

  checkMate(color: Color, start: Position, end: Position): boolean {
    const piece = this.findPiece(start)
    const opositePieces = this.cells.filter(piece => piece.getColor !== color)
    return opositePieces.some(oposite => oposite.canMoveTo(end) && piece.getType === 'King')
  }

  move(start: Position, end: Position): void {
    const piece = this.findPiece(start)
    if (!piece.canMoveTo(end)) throw new InvalidPieceMovement(piece.getType);
    if (this.isPieceBlockingToMove(start, end)) throw new Error("Can't move to that position, some other piece is blocking the way!")
    piece.moveTo(end)
  }
}
