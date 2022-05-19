import GameService from '../service/game.service.imp';
import express, { Request, Response, NextFunction } from 'express';
import Movement from '../domain/movement';
import container from '../../inversify.config';
import { Color, TYPES } from '../domain/types';

const router = express.Router();

const gameService: GameService = container.get<GameService>(TYPES.GameService);

router.get('/', async (request: Request, response: Response, next: NextFunction) => {
  const gameStatus = gameService.initGame();
  response.send(gameStatus)
})

router.get('/status', async (request: Request, response: Response, next: NextFunction) => {
  const gameStatus = gameService.getGameStatus();
  response.send(gameStatus)
})

router.post('/move', async (request: Request, response: Response, next: NextFunction) => {
  const playerMove = await request.body;
  const turn: Color = playerMove.turn;
  const movement: Movement = new Movement(playerMove.start, playerMove.end)
  try {
    gameService.movePiece(turn, movement);
    response.send({
      message: 'The piece has moved correctly',
      game: gameService.getGameStatus(),
    });
  } catch (error) {
    next(error);
  }
})


router.post('/reset', async (request: Request, response: Response, next: NextFunction) => {
  gameService.resetGame()
  response.send({
    message: 'Game reset',
    body: gameService.getGameStatus(),
  })
})

export default router;
