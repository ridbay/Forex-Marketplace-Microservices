# Notification Service

## Overview

The Notification Service consumes messages from RabbitMQ and sends email notifications to users.

## Setup Instructions

1. Install dependencies: `npm install`
2. Start the service: `npm start`
3. Ensure RabbitMQ and SMTP credentials are set in `.env`.

## Environment Variables

- `SMTP_HOST`: SMTP server host (e.g., `smtp.example.com`).
- `SMTP_PORT`: SMTP server port (e.g., `587`).
- `SMTP_USER`: SMTP username (email address).
- `SMTP_PASSWORD`: SMTP password.
- `RABBITMQ_URL`: RabbitMQ connection URL (e.g., `amqp://localhost`).

## RabbitMQ Queue

- Queue Name: `notifications`
- Message Format:
  ```json
  {
    "userId": "string",
    "message": "string"
  }
  ```
