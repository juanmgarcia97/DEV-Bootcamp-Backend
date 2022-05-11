import { User } from './user';
import { NotificationCenter } from './notification-center';
import NotificationEmail from './byEmail';
import NotificationSms from './bySms';

let user = new User();

let notificationEmail = new NotificationEmail();
notificationEmail.notify(user, 'test');

let notificationSms = new NotificationSms();
notificationSms.notify(user, 'test');

