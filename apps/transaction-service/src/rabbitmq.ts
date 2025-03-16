import amqp from 'amqplib';

async function publishToRabbitMQ(userId: string, message: string) {
  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    const queue = 'notifications';
    await channel.assertQueue(queue, { durable: false });

    const notification = JSON.stringify({ userId, message });
    channel.sendToQueue(queue, Buffer.from(notification));

    console.log(`[Transaction] Sent notification: ${message}`);
    await channel.close();
    await connection.close();
  } catch (error) {
    console.error('[Transaction] RabbitMQ Error:', error);
  }
}

export default publishToRabbitMQ;
