import { inject } from 'inversify';
import container from '../../inversify.config';
import TYPES from '../infrastructure/types';
import { IUserService } from '../service/user.service.interface';

export class UserController {
  private userService: IUserService;

  constructor(@inject('IUserService') userService: IUserService) {
    this.userService = userService;
  }
}
