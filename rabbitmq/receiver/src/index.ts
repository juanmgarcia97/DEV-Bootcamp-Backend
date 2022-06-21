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

      channel.assertQueue(queue, { durable: false });

      console.log(`Waiting for messages in queue ${queue} ...`);

      channel.consume(
        queue,
        function (message) {
          console.log(`Message received: ${message?.content.toString()}`);
        },
        {
          noAck: true,
        }
      );
    });

    setTimeout(function () {
      connection.close();
      process.exit(0);
    }, 500);
  }
);
