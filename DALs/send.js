var amqp = require('amqplib/callback_api');



const sendMsg = function (q_id, msg)
{
  console.log('sendMsg')
  amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        channel.assertQueue(q_id, {
            durable: false
        });
        channel.sendToQueue(q_id, Buffer.from(msg.msg));

        console.log(" [x] Sent %s", msg);
    });
    setTimeout(function() {
        connection.close();
        process.exit(0);
    }, 500);
});
}


module.exports  =  {sendMsg}