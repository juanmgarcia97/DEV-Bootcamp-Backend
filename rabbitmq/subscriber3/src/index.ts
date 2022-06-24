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

      channel.assertExchange(exchange, 'fanout', { durable: false });

      channel.assertQueue(
        queue,
        { durable: true, autoDelete: false },
        function (error2, q) {
          if (error2) console.log(error2);
          console.log(`Waiting for messages in queue ${q.queue}`);

          channel.bindQueue(q.queue, exchange, '');

          channel.consume(
            q.queue,
            function (msg) {
              if (msg) {
                console.log(`Message received: ${msg.content.toString()}`);
              }
            },
            {
              noAck: true,
            }
          );
        }
      );
    });
  }
);
