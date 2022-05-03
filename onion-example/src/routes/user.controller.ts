import container from '../../inversify.config';
import TYPES from '../infrastructure/types';
import { IUserService } from '../service/user.service.interface';

export class UserController {
  private userService: IUserService;

  constructor() {
    this.userService = container.get<IUserService>(TYPES.IUserService);
  }
}
