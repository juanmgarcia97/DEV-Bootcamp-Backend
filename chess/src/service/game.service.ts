import Game from "../domain/game";
import Movement from "../domain/movement";
import { Color, GameStatus } from "../domain/types";

export default interface GameService {
    saveGame(game: Game): void;
    resetGame(): void;
    loadGame(id: number): Game;
    initGame(): GameStatus;
    getGameStatus(): GameStatus;
    movePiece(turn: Color, movement: Movement): void;
}