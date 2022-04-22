import Piece from "./piece";
import { Position } from "./position";

export class King extends Piece {
    canMoveTo(position: Position): boolean {
        return (Math.abs(this.position.getRank() - position.getRank()) <= 1)
        && (Math.abs(this.position.getFile().charCodeAt(0) - position.getFile().charCodeAt(0)) <= 1);
    }

}