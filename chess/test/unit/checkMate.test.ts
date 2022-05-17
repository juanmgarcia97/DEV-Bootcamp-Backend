import Board from '../../src/domain/board';
import { Position } from '../../src/domain/position';
import Game from '../../src/domain/game';
import KingExposed from '../../src/domain/exceptions/kingExposed';

describe('Check Mate Tests', () => {
  it('Should avoid the king expose to Check Mate', () => {
    const board = new Board();
    const game = new Game(board);
    let startWhite = new Position('D', 2);
    let endWhite = new Position('D', 3);
    game.movePiece('White', startWhite, endWhite);
    let startBlack = new Position('C', 7);
    let endBlack = new Position('C', 6);
    game.movePiece('Black', startBlack, endBlack);
    startWhite = new Position('E', 2);
    endWhite = new Position('E', 3);
    game.movePiece('White', startWhite, endWhite);
    startBlack = new Position('D', 8);
    endBlack = new Position('A', 5);
    game.movePiece('Black', startBlack, endBlack);
    startWhite = new Position('E', 1);
    endWhite = new Position('D', 2);
    try {
      game.movePiece('White', startWhite, endWhite);
    } catch (error) {
      expect(error).toBeInstanceOf(KingExposed);
    }
  });

  it('Should avoid to move the king to a position a knight can move', () => {
    const board = new Board();
    const game = new Game(board);
    let startWhite = new Position('E', 2);
    let endWhite = new Position('E', 3);
    game.movePiece('White', startWhite, endWhite);
    let startBlack = new Position('G', 8);
    let endBlack = new Position('F', 6);
    game.movePiece('Black', startBlack, endBlack);
    startWhite = new Position('E', 1);
    endWhite = new Position('E', 2);
    game.movePiece('White', startWhite, endWhite);
    startBlack = new Position('F', 6);
    endBlack = new Position('G', 4);
    game.movePiece('Black', startBlack, endBlack);
    startWhite = new Position('E', 3);
    endWhite = new Position('E', 4);
    game.movePiece('White', startWhite, endWhite);
    startBlack = new Position('A', 7);
    endBlack = new Position('A', 6);
    game.movePiece('Black', startBlack, endBlack);
    startWhite = new Position('E', 2);
    endWhite = new Position('E', 3);
    try {
      game.movePiece('White', startWhite, endWhite);
    } catch (error) {
      expect(error).toBeInstanceOf(KingExposed);
    }
  });

  it('Should avoid the check by blocking piece', () => {
    const board = new Board();
    const game = new Game(board);
    let startWhite = new Position('D', 2);
    let endWhite = new Position('D', 3);
    game.movePiece('White', startWhite, endWhite);
    let startBlack = new Position('C', 7);
    let endBlack = new Position('C', 6);
    game.movePiece('Black', startBlack, endBlack);
    startWhite = new Position('E', 2);
    endWhite = new Position('E', 3);
    game.movePiece('White', startWhite, endWhite);
    startBlack = new Position('D', 8);
    endBlack = new Position('A', 5);
    game.movePiece('Black', startBlack, endBlack);
    startWhite = new Position('D', 1);
    endWhite = new Position('D', 2);
    game.movePiece('White', startWhite, endWhite);
  });

  it('Should avoid the check by moving the king to safe space', () => {
    const board = new Board();
    const game = new Game(board);
    let startWhite = new Position('D', 2);
    let endWhite = new Position('D', 3);
    game.movePiece('White', startWhite, endWhite);
    let startBlack = new Position('C', 7);
    let endBlack = new Position('C', 6);
    game.movePiece('Black', startBlack, endBlack);
    startWhite = new Position('E', 2);
    endWhite = new Position('E', 3);
    game.movePiece('White', startWhite, endWhite);
    startBlack = new Position('D', 8);
    endBlack = new Position('A', 5);
    game.movePiece('Black', startBlack, endBlack);
    startWhite = new Position('E', 1);
    endWhite = new Position('E', 2);
    game.movePiece('White', startWhite, endWhite);
  });
});
