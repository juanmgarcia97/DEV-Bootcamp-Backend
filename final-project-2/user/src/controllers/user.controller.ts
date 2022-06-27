import express, { Request, request, Response } from 'express';
import container from '../../inversify.config';
import User from '../domain/user';
import { UserService } from '../service/user.service';

const router = express.Router();

const userService: UserService = container.get<UserService>('UserService');

router.get('/', async (request: Request, response: Response) => {
  const users = await userService.findAll();
  response.status(200).json({
    message: 'Users found',
    data: users,
  });
});

router.delete('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;
  await userService.deleteUser(Number(id));
  response.status(200).json({
    message: 'User deleted',
    data: `User id: ${id}`,
  });
});

router.post('/', async (request: Request, response: Response) => {
  const user = request.body as User;
  const createdUser = await userService.createUser(user);
  response.status(201).json({
    message: 'User created',
    data: createdUser,
  });
});

router.put('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;
  const user = request.body as User;
  const createdUser = await userService.updateUser(Number(id), user);
  response.status(200).json({
    message: 'User updated',
    data: createdUser,
  });
});

router.all('*', () => {
  throw new Error('Page not found');
});

export default router;
