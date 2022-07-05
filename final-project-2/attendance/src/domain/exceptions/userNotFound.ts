export class UserNotFound extends Error {
  constructor() {
    super('Can\'t create an attendance for an unexisting user');
    super.name = 'UserNotFound';
  }
}
