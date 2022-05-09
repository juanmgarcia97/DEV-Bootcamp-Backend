import {controller, httpGet, response} from 'inversify-express-utils'
import GameService from '../service/game.service';
const express = require("express");
const router = express.Router();

@controller('/game')
export default class GameController {
    private service!: GameService;

    // @httpGet('/')
    // async initGame(res, req, next) {
    //     let game = this.service.initGame();
    //     res.
    // }
}