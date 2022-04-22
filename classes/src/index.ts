// class Game { }

import King from "./king";
import { Position } from './position';

// class Piece { }

// class Position { }

// class King extends Piece { }
// class Queen extends Piece { }
// class Bishop extends Piece { }
// class Rook extends Piece { }
// class Pawn extends Piece { }
// class Knight extends Piece { }

let king = new King('Black', 'A', 1);

console.log(king.canMoveTo(new Position('C', 2)));
