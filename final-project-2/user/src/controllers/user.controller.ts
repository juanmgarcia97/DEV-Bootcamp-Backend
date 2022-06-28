import express, { NextFunction, Request, Response } from 'express';
import container from '../../inversify.config';
import User from '../domain/user';
import { UserService } from '../service/user.service';
import { validate as uuidValidate } from 'uuid';
import InvalidUserId from '../domain/exceptions/invalidUserId';
import EmptyUser from '../domain/exceptions/emptyUser';

const router = express.Router();

const userService: UserService = container.get<UserService>('UserService');

router.get(
  '/',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const users = await userService.findAll();
      response.status(200).json({
        message: 'Users found',
        data: users,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/filter',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { property } = request.query;
      // if (!uuidValidate(nickname)) throw new InvalidUserId();
      // const user = await userService.findUserByNickname(nickname);
      response.status(200).json({
        message: 'User found',
        data: property,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/:fullName',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { fullName } = request.params;
      if (!uuidValidate(fullName)) throw new InvalidUserId();
      const user = await userService.findUserByFullName(fullName);
      response.status(200).json({
        message: 'User found',
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { id } = request.params;
      if (!uuidValidate(id)) throw new InvalidUserId();
      await userService.deleteUser(id);
      response.status(204);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const user = request.body as User;
      if (!user || user === null) throw new EmptyUser();
      const createdUser = await userService.createUser(user);
      response.status(201).json({
        message: 'User created',
        data: createdUser,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { id } = request.params;
      if (!uuidValidate(id)) throw new InvalidUserId();
      const user = request.body as User;
      const createdUser = await userService.updateUser(id, user);
      response.status(200).json({
        message: 'User updated',
        data: createdUser,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.all('*', () => {
  throw new Error('Page not found');
});

export default router;
