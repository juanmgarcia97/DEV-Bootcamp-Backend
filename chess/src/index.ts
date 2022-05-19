import 'reflect-metadata';
import express, {
  application,
  json,
  NextFunction,
  request,
  Request,
  Response,
} from 'express';
import { errorHandler } from './infrastructure/middlewares/error-handler';
import GameController from './controllers/game.controller'
import GameRepository from './infrastructure/game.repository.imp';
import Game from './domain/game';
import { Position } from './domain/position';
import Movement from './domain/movement';
import { InversifyExpressServer } from 'inversify-express-utils';
// import container from '../inversify.config';
import { Container } from 'inversify';
import { TYPES } from './domain/types';
import GameService from './service/game.service';


// server.setErrorConfig((app) => {
// })

const app = express();
const port = 3_000;

app.use(json());
app.use('/api', GameController)
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
