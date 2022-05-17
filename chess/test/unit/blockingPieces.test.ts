import Board from '../../src/domain/board';
import BlockingPiece from '../../src/domain/exceptions/blockingPiece';
import Game from '../../src/domain/game';
import { Position } from '../../src/domain/position';

describe('Blocking Pieces Tests', () => {
  it('Should avoid move a rook over a piece', () => {
    const board = new Board();
    const game = new Game(board);
    const startPosition = new Position('A', 1);
    const endPosition = new Position('A', 3);
    try {
      game.movePiece('White', startPosition, endPosition);
    } catch (error) {
      expect(error).toBeInstanceOf(BlockingPiece);
    }
  });

  it('Should avoid move a bishop over a piece', () => {
    const board = new Board();
    const game = new Game(board);
    const startPosition = new Position('C', 1);
    const endPosition = new Position('A', 3);
    try {
      game.movePiece('White', startPosition, endPosition);
    } catch (error) {
      expect(error).toBeInstanceOf(BlockingPiece);
    }
  });

  it('Should avoid move the queen over a piece', () => {
    const board = new Board();
    const game = new Game(board);
    const startPosition = new Position('D', 1);
    const endPosition = new Position('D', 3);
    try {
      game.movePiece('White', startPosition, endPosition);
    } catch (error) {
      expect(error).toBeInstanceOf(BlockingPiece);
    }
  });

  it('Should avoid move a pawn over a piece', () => {
    const board = new Board();
    const game = new Game(board);
    let startPosition = new Position('A', 2);
    let endPosition = new Position('A', 4);
    game.movePiece('White', startPosition, endPosition);
    startPosition = new Position('A', 7);
    endPosition = new Position('A', 5);
    game.movePiece('Black', startPosition, endPosition);
    startPosition = new Position('A', 4);
    endPosition = new Position('A', 5);
    try {
      game.movePiece('White', startPosition, endPosition);
    } catch (error) {
      expect(error).toBeInstanceOf(BlockingPiece);
    }
  });

  it('Should let move the knight over a piece', () => {
    const board = new Board();
    const game = new Game(board);
    const startPosition = new Position('B', 1);
    const endPosition = new Position('C', 3);
    expect(game.movePiece('White', startPosition, endPosition)).toBe(undefined);
  });
});
