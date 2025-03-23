https://bitbucket.org/ridbay/forex-marketplace-microservices/src/main/

# Forex Marketplace Microservices

This project implements a simple foreign exchange (Forex) marketplace using a microservices architecture. It allows users to buy and sell forex, with conversion rates fetched from an external API.

## Project Structure

This project is a monorepo managed using Nx. The repository is structured as follows:

- `apps/`: Contains the individual microservices.
- `libs/`: Contains shared libraries used across multiple services.

## Services

### 1. Wallet Service

- **Description:** Manages user wallet balances and transactions.
- **Technology:** Express.js, TypeScript, TypeORM, PostgreSQL.
- **Endpoints:**

  - `GET /wallets/:userId/balance`: Get user's wallet balance.
  - `POST /wallets/:userId/credit`: Credit user's wallet.

- **Setup:**
  1.  Install dependencies: `npm install`
  2.  Set environment variables.
  3.  Run migrations: `npx nx run wallet-service:migrate`
  4.  Start the service: `npx nx serve wallet-service`
- **Environment Variables:**
  - `DATABASE_URL`: PostgreSQL connection string.
  - `PORT`: Service port.

### 2. Transaction and Order Service

- **Description:** Handles forex buy/sell orders and transaction history.
- **Technology:** Express.js, TypeScript, TypeORM, PostgreSQL.
- **Endpoints:**

  - `POST /orders/buy`: Place a buy order.
  - `POST /orders/sell`: Place a sell order.
  - `GET /transactions/:userId`: Get user's transaction history.

- **Setup:**
  1.  Install dependencies: `npm install`
  2.  Set environment variables.
  3.  Run migrations: `npx nx run transaction-order-service:migrate`
  4.  Start the service: `npx nx serve transaction-order-service`
- **Environment Variables:**
  - `DATABASE_URL`: PostgreSQL connection string.
  - `PORT`: Service port.
  - `RATE_SERVICE_URL`: gRPC URL of the Rate Service.
  - `RABBITMQ_URL`: URL to connect to RabbitMQ

### 3. User and Authentication Service

- **Description:** Manages user registration, login, and profile.
- **Technology:** Express.js, TypeScript, TypeORM, PostgreSQL, JWT.
- **Endpoints:**

  - `POST /users/register`: Register a new user.
  - `POST /users/login`: Login user and get JWT token.
  - `GET /users/profile`: Get user profile (requires JWT).

- **Setup:**
  1.  Install dependencies: `npm install`
  2.  Set environment variables.
  3.  Run migrations: `npx nx run user-auth-service:migrate`
  4.  Start the service: `npx nx serve user-auth-service`
- **Environment Variables:**
  - `DATABASE_URL`: PostgreSQL connection string.
  - `PORT`: Service port.
  - `JWT_SECRET`: Secret key for JWT.

### 4. Rate Service

- **Description:** Fetches forex rates from ExchangeRate-API and exposes them via gRPC.
- **Technology:** Express.js, TypeScript, gRPC.

- **Setup:**
  1.  Install dependencies: `npm install`
  2.  Set environment variables.
  3.  Start the service: `npx nx serve rate-service`
- **Environment Variables:**
  - `EXCHANGE_RATE_API`: API key for ExchangeRate-API.
  - `EXCHANGE_RATE_API_URL`: URL for ExchangeRate-API.
  - `PORT`: gRPC service port.

### 5. Notification Service

- **Description:** Sends notifications to users after successful transactions using RabbitMQ.
- **Technology:** Express.js, TypeScript, RabbitMQ.

- **Setup:**
  1.  Install dependencies: `npm install`
  2.  Set environment variables.
  3.  Start the service: `npx nx serve notification-service`
- **Environment Variables:**
  - `RABBITMQ_URL`: URL to connect to RabbitMQ.
  - `PORT`: Service port.

## Shared Libraries

- `libs/shared/logging`: Provides centralized logging functionality.
- `libs/shared/error-handling`: Provides standardized error handling.

## Testing

- Unit tests are implemented using Jest.
- Run tests: `npx nx test <service-name>` (e.g., `npx nx test wallet-service`).

## Running the Project

1.  Install Nx globally: `npm install -g nx`
2.  Clone the repository.
3.  Install dependencies: `npm install`
4.  Set up environment variables for each service.
5.  Run migrations for each service: `npx nx run <service-name>:migrate`
6.  Start all services: `npx nx run-many --target=serve --all`

## Database Setup

- PostgreSQL is used for data storage.
- Ensure PostgreSQL is installed and running.
- Create a database and provide the connection string in the environment variables.

## RabbitMQ Setup

- RabbitMQ is used for job queue.
- Ensure RabbitMQ is installed and running.
- Provide the RabbitMQ connection string in the environment variables.

## External API

- ExchangeRate-API is used to fetch forex rates.
- Obtain an API key from ExchangeRate-API and provide it in the environment variables.
