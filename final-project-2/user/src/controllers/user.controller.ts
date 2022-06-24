import express, { Request, request, Response } from 'express';
import container from '../../inversify.config';
import User from '../domain/user';
import { UserService } from '../service/user.service';

const router = express.Router();

const userService: UserService = container.get<UserService>('UserService');

router.get('/', async (request: Request, response: Response) => {
  const users = userService.findAll();
  response.status(200).send({
    message: 'User found',
    body: users,
  });
});

router.post('/', async (request: Request, response: Response) => {
  const user = request.body as User;
  const createdUser = userService.createUser(user);
  response.status(201).send({
    message: 'User created',
    body: createdUser,
  });
});

export default router;
