import express from 'express';
import GameRepository from './infrastructure/game.repository';

const app = express();
const port = 3_000;

let repository: GameRepository = new GameRepository();
// let service: GameService = new GameService(repository);

app.get('/', (request, response) => {
  response.send(repository.initGame());
});

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