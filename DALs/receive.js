var amqp = require('amqplib/callback_api');

const getMsg = function(q_id)
{
    console.log('getMsg')
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
    
            console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q_id);
    
            channel.consume(q_id, function(msg) {
                console.log(msg.content.toString())
               channel.ack(msg)
            });
        });
    });
}

module.exports  =  {getMsg}