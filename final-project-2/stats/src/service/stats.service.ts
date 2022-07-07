import amqp from 'amqplib/callback_api';
import { UserService } from './user.service';

export class StatsService {
    private config = {
        hostname: 'localhost',
        port: 5672,
        username: 'admin',
        password: '123456'
    };
    private queueName = 'statsQueue';
    private userService!: UserService;

    constructor() {
        this.createConnection();
        this.userService = new UserService();
    }

    createConnection() {
        amqp.connect(this.config, (error, connection) => {
            if (error) console.error(error);
            connection.createChannel((error1, channel) => {
                if (error1) console.error(error1);
                else console.log('Connected');
                channel.assertQueue(this.queueName, { durable: false });
                channel.consume(this.queueName, async (message) => {
                    if (message) {
                        const queueMessage = JSON.parse(message.content.toString());
                        let updatedUser
                        try {
                            updatedUser = await this.userService.updateUserAttendance(queueMessage.userId);
                        } catch (error) {
                            console.log(error);
                        }
                        if (updatedUser) channel.ack(message);
                    }
                });
            });
            setTimeout(() => {
                connection.close();
            }, 10000);
        });
    }
}