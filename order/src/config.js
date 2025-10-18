require('dotenv').config();

module.exports = {
    mongoURI: process.env.MONGODB_ORDER_URI,
    rabbitMQURI: 'amqp://localhost',
    rabbitMQQueue: 'orders',
    port: 3002
};
  