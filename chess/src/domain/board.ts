import Bishop from './bishop';
import King from './king';
import Knight from './knight';
import Pawn from './pawn';
import Queen from './queen';
import Rook from './rook';
import Piece from './piece';
import {Position} from './position';
import {Color, NFile, Rank} from './types';
import InvalidPieceMovement from './exceptions/invalidPieceMovement';
import BlockingPiece from './exceptions/blockingPiece';
import Movement from './movement';
import PieceNotFound from "./exceptions/pieceNotFound";

export default class Board {
  private cells!: Piece[];

  constructor() {
    this.initBoard();
  }

  get getBoard() {
    return this.cells;
  }

  private initBoard(): void {
    this.cells = [];
    let color: Color;
    for (let rank: Rank = 1; rank < 9; rank++) {
      for (let file: NFile = 1; file < 9; file++) {
        if (rank <= 2) {
          color = 'White';
          this.assignPieces(color, file as NFile, rank as Rank);
        } else if (rank >= 7) {
          color = 'Black';
          this.assignPieces(color, file as NFile, rank as Rank);
        }
      }
    }
  }

  private assignPieces(color: Color, file: NFile, rank: Rank): void {
    if (rank == 1 || rank == 8) {
      if (file == 1 || file == 8) {
        this.cells.push(new Rook(color, new Position(file, rank)));
      } else if (file == 2 || file == 7) {
        this.cells.push(new Knight(color, new Position(file, rank)));
      } else if (file == 3 || file == 6) {
        this.cells.push(new Bishop(color, new Position(file, rank)));
      } else if (file == 4) {
        this.cells.push(new Queen(color, new Position(file, rank)));
      } else {
        this.cells.push(new King(color, new Position(file, rank)));
      }
    } else if (rank == 2 || rank == 7) {
      this.cells.push(new Pawn(color, new Position(file, rank)));
    }
  }

  private findPiece(position: Position): Piece | undefined {
    return this.cells.find((piece) => piece.equalPosition(position));
  }

  private isPositionFree(position: Position): boolean {
    return !this.findPiece(position);
  }

  private getBiggestDifference(firstValue: number, secondValue: number): number {
    return Math.max(Math.abs(firstValue), Math.abs(secondValue));
  }

  private getMovementDirection(movement: number): number {
    return movement > 0 ? -1 : movement < 0 ? 1 : 0;
  }

  private getFileDifference(movement: Movement): number {
    return movement.startFileNumber - movement.endFileNumber;
  }

  private getRankDifference(movement: Movement): number {
    return movement.startRank - movement.endRank;
  }

  isPieceBlockingToMove(movement: Movement): boolean {
    const fileDifference = this.getFileDifference(movement);
    const rankDifference = this.getRankDifference(movement);
    const biggestMove = this.getBiggestDifference(
      fileDifference,
      rankDifference
    );
    for (let pivot = 1; pivot < biggestMove; pivot++) {
      const movingPosition = new Position(
        (movement.startFileNumber +
          pivot * this.getMovementDirection(fileDifference)) as NFile,
        (movement.startRank +
          pivot * this.getMovementDirection(rankDifference)) as Rank
      );
      if (!this.isPositionFree(movingPosition)) return true;
    }
    return false;
  }

  checkMate(color: Color, movement: Movement): boolean {
    const piece = this.findPiece(movement.start);
    if(!piece) throw new PieceNotFound();
    const oppositePieces = this.cells.filter(
      (piece) => piece.getColor !== color
    );
    return oppositePieces.some(
      (opposite) =>
        opposite.canMoveTo(movement.end) &&
        opposite.canMoveTo(movement.start) &&
        piece.getType === 'King'
    );
  }

  move(movement: Movement): void {
    const piece = this.findPiece(movement.start);
    if(!piece) throw new PieceNotFound();
    if (!piece.canMoveTo(movement.end))
      throw new InvalidPieceMovement(piece.getType);
    if (this.isPieceBlockingToMove(movement) && piece.getType !== 'Knight')
      throw new BlockingPiece();
    piece.moveTo(movement.end);
  }
}
