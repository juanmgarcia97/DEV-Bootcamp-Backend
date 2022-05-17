import Board from '../../src/domain/board';
import { Position } from '../../src/domain/position';
import Game from '../../src/domain/game';
import KingExposed from '../../src/domain/exceptions/kingExposed';

describe('Check Mate Tests', () => {
    const board = new Board();
    const game = new Game(board);

    it('Should avoid the king expose to Chack Mate', () => {
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
        expect(game.movePiece('White', startWhite, endWhite)).toThrow(new KingExposed());
    })
})