import { Notification } from './notification-method';
import { User } from './user';
export default class NotificationEmail implements Notification {
    notify(user: User, message: string): void {
        throw new Error('Method not implemented.');
    }

}