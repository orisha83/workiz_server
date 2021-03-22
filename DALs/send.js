var amqp = require('amqplib/callback_api');



const sendMsg = function (q_id, msg)
{
  amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var q_id = 'hello';
        var msg = 'Hello World!';

        channel.assertQueue(q_id, {
            durable: false
        });
        channel.sendToQueue(q_id, Buffer.from(msg));

        console.log(" [x] Sent %s", msg);
    });
    setTimeout(function() {
        connection.close();
        process.exit(0);
    }, 500);
});
}


module.exports  =  {sendMsg}