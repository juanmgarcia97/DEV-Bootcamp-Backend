import express, { json, NextFunction, Request, Response } from 'express';
import GameRepository from './infrastructure/game.repository';
import Game from './domain/game';
import { Position } from './domain/position';

const app = express();
const port = 3_000;

app.use(json());

let repository: GameRepository = new GameRepository();
// let service: GameService = new GameService(repository);

app.get('/', (request, response) => {
  response.send(repository.initGame());
});

app.post('/move', async (request: Request, response: Response, next: NextFunction) => {
  const movement = await request.body
  const game: Game = repository.getGame()
  let message: string;
  let start = new Position(movement.start.file, movement.start.rank)
  let end = new Position(movement.end.file, movement.end.rank)
  const moved = game.movePiece(movement.turn, start, end);
  if(moved) {
    message = "The piece has moved correctly"
    response.send({
      message,
      game: game.status
    })
  } else {
    message = "Invalid move, it's not your turn"
    response.status(400).send({
      message,
    })
  }
})

app.post('/reset', (request, response) => {
  repository.resetGame()
  response.status(200).send({
    message: "Game reset",
    body: repository.getGame()
  })
})

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});