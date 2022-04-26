// class Game { }

import King from './king';
import { Position } from './position';
import Queen from './queen';

// class Piece { }

// class Position { }

// class King extends Piece { }
// class Queen extends Piece { }
// class Bishop extends Piece { }
// class Rook extends Piece { }
// class Pawn extends Piece { }
// class Knight extends Piece { }

let king = new Queen('Black', 'D', 4);

console.log(king.canMoveTo(new Position('B', 7)));
