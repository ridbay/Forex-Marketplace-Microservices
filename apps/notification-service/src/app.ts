/* eslint-disable @typescript-eslint/no-explicit-any */

import Config from './config/config';
import * as amqp from 'amqplib';
import { sendEmail } from './utils/sendEmail';

async function start() {
  try {
    const connection = await amqp.connect(Config.RABBITMQ_URL);
    const channel = await connection.createChannel();

    const queue = 'notifications';
    await channel.assertQueue(queue, { durable: false });

    console.log('Notification Service Waiting for Messages...');

    channel.consume(queue, async (msg: any) => {
      if (msg) {
        const content = msg.content.toString();
        const notification = JSON.parse(content);

        const { userId, message } = notification;

        try {
          await sendEmail(userId, 'Forex Marketplace Notification', message);
          console.log(`[Notification] Email sent to ${userId}`);
        } catch (error) {
          console.error('[Notification] Failed to send email:', error);
        }

        channel.ack(msg); // Acknowledge the message
      }
    });
  } catch (error) {
    console.error('[Notification] RabbitMQ Error:', error);
  }
}

start();
