import 'reflect-metadata';
import 'dotenv/config';
import express, { json } from 'express';
import { AppDataSource } from './infrastructure/persistence/db.config';
import UserController from './controllers/user.controller';

const app = express();
const port = 3_000;

app.use(json());
app.use('/users', UserController);

AppDataSource.initialize().then(() => {
  app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
  });
});
