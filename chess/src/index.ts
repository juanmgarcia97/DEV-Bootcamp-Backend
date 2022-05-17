import express, {
  application,
  json,
  NextFunction,
  request,
  Request,
  Response,
} from 'express';
import GameRepository from './infrastructure/game.repository';
import Game from './domain/game';
import { Position } from './domain/position';
import { errorHandler } from './infrastructure/middlewares/error-handler';
const app = express();
const port = 3_000;

app.use(json());

let repository: GameRepository = new GameRepository();
// let service: GameService = new GameService(repository);

app.get('/', (request, response) => {
  response.send(repository.initGame());
});

app.get('/status', (request, response) => {
  response.send(repository.getGame().status);
});

app.post(
  '/move',
  async (request: Request, response: Response, next: NextFunction) => {
    const movement = await request.body;
    const game: Game = repository.getGame();
    const start = new Position(movement.start.file, movement.start.rank);
    const end = new Position(movement.end.file, movement.end.rank);
    try {
      game.movePiece(movement.turn, start, end);
      response.send({
        message: 'The piece has moved correctly',
        game: game.status,
      });
    } catch (error) {
      next(error);
    }
  }
);

app.post('/reset', (request, response) => {
  repository.resetGame();
  response.status(200).send({
    message: 'Game reset',
    body: repository.getGame().status,
  });
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
