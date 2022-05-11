import { User } from './user';
export interface Notification {
    notify(user: User, message: string): void;
}