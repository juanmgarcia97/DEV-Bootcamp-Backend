import Game from './game';
import express from 'express';
import Board from './domain/board';

const app = express();
const port = 3_000;

app.get('/', (request, response) => {
  let board = new Board();
  let game = new Game(board);
  response.send(game);
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
