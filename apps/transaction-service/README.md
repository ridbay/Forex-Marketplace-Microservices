# Transaction Service

## Overview

The Transaction Service handles forex buy/sell orders and provides transaction history viewing capabilities.

## Endpoints

- **POST /order**: Place a buy/sell order.

  - Request Body:
    ```json
    {
      "userId": "string",
      "currencyPair": "string",
      "amount": "number",
      "rate": "number",
      "type": "buy" | "sell"
    }
    ```
  - Response:
    ```json
    {
      "id": "number",
      "userId": "string",
      "currencyPair": "string",
      "amount": "number",
      "rate": "number",
      "type": "buy" | "sell",
      "createdAt": "date"
    }
    ```

- **GET /transactions/:userId**: Fetch transaction history for a user.

## Setup Instructions

1. Install dependencies: `npm install`
2. Start the service: `npm start`
3. Ensure RabbitMQ and PostgreSQL are running via Docker.

## Environment Variables

- `DATABASE_URL`: Connection string for PostgreSQL.
