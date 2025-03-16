# Rate Service

## Overview

The Rate Service fetches current forex rates from an external API and exposes them to other services via gRPC.

## gRPC Endpoints

- **GetRate**: Fetch the exchange rate for a given currency pair.
  - Request:
    ```proto
    message RateRequest {
      string currencyPair = 1; // e.g., "USD/EUR"
    }
    ```
  - Response:
    ```proto
    message RateResponse {
      float rate = 1;
    }
    ```

## Setup Instructions

1. Install dependencies: `npm install`
2. Start the service: `npm start`
3. Ensure the external API key is set in `.env`.

## Environment Variables

- `EXCHANGE_RATE_API_KEY`: API key for ExchangeRate-API.
