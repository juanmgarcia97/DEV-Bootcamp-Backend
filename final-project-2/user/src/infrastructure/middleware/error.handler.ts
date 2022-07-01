import { NextFunction, Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';
import EmptyUser from '../../domain/exceptions/emptyUser';
import UserNotFound from '../../domain/exceptions/userNotFound';

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof UserNotFound) {
    res.status(404).json({
      name: err.name,
      message: err.message,
      stack: err.stack,
    });
  } else {
    res.status(400).json({
      name: err.name,
      message: err.message,
      stack: err.stack,
    });
  }
}
