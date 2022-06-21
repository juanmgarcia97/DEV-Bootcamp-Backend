import amqp = require('amqplib/callback_api');

amqp.connect(
  {
    protocol: 'amqp',
    hostname: 'localhost',
    port: 5672,
    username: 'admin',
    password: '123456',
  },
  function (error, connection) {
    if (error) console.log(error);

    connection.createChannel(function (error1, channel) {
      if (error1) console.log(error1);

      const queue = 'hello';
      const message = 'Hello World';

      channel.assertQueue(queue, { durable: false });

      channel.sendToQueue(queue, Buffer.from(message));

      console.log(`message: ${message}`);
    });

    setTimeout(function () {
      connection.close();
      process.exit(0);
    }, 500);
  }
);
