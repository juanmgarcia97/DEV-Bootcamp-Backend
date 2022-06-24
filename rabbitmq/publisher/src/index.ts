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

      const exchange = 'logs';
      const queue = 'fanoutQueue';
      const message = 'Hello World';

      channel.assertQueue(queue, { durable: true, autoDelete: false });

      channel.assertExchange(exchange, 'fanout', { durable: false });

      channel.publish(exchange, '', Buffer.from(message));

      console.log(`Message published: ${message}`);
    });

    setTimeout(function () {
      connection.close();
      process.exit(0);
    }, 500);
  }
);
