import { Color } from "./types";

export default class Player {
    constructor(
        private readonly _color: Color,
        private _turn: boolean
    ) { }

    get color() {
        return this._color;
    }

    get turn() {
        return this._turn;
    }

    protected set changeTurn(_turn: boolean) {
        this._turn = _turn;
    }

    passTurn(player: Player) {
        this._turn = !this._turn;
        player._turn = !player.turn;
    }
}