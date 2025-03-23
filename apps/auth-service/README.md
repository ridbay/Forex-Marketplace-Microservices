# User Authentication Service

## Overview

The User Authentication Service handles user registration, login, and JWT-based session management.

## Endpoints

- **POST /register**: Register a new user.

  - Request Body:
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```
  - Response:
    ```json
    {
      "message": "User registered successfully"
    }
    ```

- **POST /login**: Log in and receive a JWT token.

  - Request Body:
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```
  - Response:
    ```json
    {
      "token": "string"
    }
    ```

- **GET /profile**: Access a protected route using the JWT token.
  - Headers:
    ```json
    {
      "Authorization": "Bearer <TOKEN>"
    }
    ```
  - Response:
    ```json
    {
      "user": {
        "id": "string",
        "email": "string"
      }
    }
    ```

## Setup Instructions

1. Install dependencies: `npm install`
2. Start the service: `npm start`
3. Ensure RabbitMQ and PostgreSQL are running via Docker.

## Environment Variables

- `SECRET_KEY`: Secret key for JWT signing.
