# MAX Exchange V3 RESTful API

## Overview

Welcome to the MAX Exchange V3 RESTful API documentation. This API provides a set of public endpoints that can be used to interact with the exchange, retrieve market data, and manage trades. 

**Base URL**: `https://max-api.maicoin.com`

**Version**: 3.0.0

## Available Endpoints

### Public Endpoints

These endpoints are available without authentication.

#### Get Latest Index Prices

- **Endpoint**: `/api/v3/wallet/m/index_prices`
- **Method**: `GET`
- **Description**: Get the latest index prices of m-wallet.
- **Response**: JSON containing index prices.

#### Get Historical Index Prices

- **Endpoint**: `/api/v3/wallet/m/historical_index_prices`
- **Method**: `GET`
- **Description**: Get historical index prices for supported markets.
- **Query Parameters**:
  - `market` (string, required): Market identifier (e.g., `btctwd`, `ethusdt`).
  - `start_time` (integer, required): Start time in milliseconds since Unix epoch.
  - `end_time` (integer, required): End time in milliseconds since Unix epoch.
- **Response**: JSON array of historical index prices.

#### Get Available Loan Amount

- **Endpoint**: `/api/v3/wallet/m/limits`
- **Method**: `GET`
- **Description**: Get the total available loan amount.
- **Response**: JSON containing available loan amount.

#### Get Interest Rates

- **Endpoint**: `/api/v3/wallet/m/interest_rates`
- **Method**: `GET`
- **Description**: Get the latest interest rates of m-wallet.
- **Response**: JSON containing interest rates.

#### Get All Available Markets

- **Endpoint**: `/api/v3/markets`
- **Method**: `GET`
- **Description**: Retrieve a list of all available markets, including their statuses.
- **Response**: JSON array of market details.

#### Get All Available Currencies

- **Endpoint**: `/api/v3/currencies`
- **Method**: `GET`
- **Description**: Retrieve a list of all available currencies.
- **Response**: JSON array of currency details.

#### Get Server Current Time

- **Endpoint**: `/api/v3/timestamp`
- **Method**: `GET`
- **Description**: Get the server's current time, in seconds since the Unix epoch.
- **Response**: JSON object with the server's current time.

#### Get OHLC Data (K-line)

- **Endpoint**: `/api/v3/k`
- **Method**: `GET`
- **Description**: Get OHLC (Open, High, Low, Close) data for a specific market.
- **Query Parameters**:
  - `market` (string, required): Market identifier.
  - `limit` (integer, optional): Number of data points to return.
  - `period` (integer, optional): Time period of K line in minutes.
  - `timestamp` (integer, optional): Start time for data.
- **Response**: JSON array of OHLC data.

#### Get Market Depth

- **Endpoint**: `/api/v3/depth`
- **Method**: `GET`
- **Description**: Get the order book depth of a specified market.
- **Query Parameters**:
  - `market` (string, required): Market identifier.
  - `limit` (integer, optional): Number of price levels to return.
- **Response**: JSON array with price and volume.

#### Get Recent Trades

- **Endpoint**: `/api/v3/trades`
- **Method**: `GET`
- **Description**: Get recent trades on a market, sorted in reverse creation order.
- **Query Parameters**:
  - `market` (string, required): Market identifier.
  - `timestamp` (integer, optional): Maximum trade timestamp.
  - `limit` (integer, optional): Number of trades to return.
- **Response**: JSON array of trades.

#### Get Ticker Data for All Markets

- **Endpoint**: `/api/v3/tickers`
- **Method**: `GET`
- **Description**: Get ticker data for all markets.
- **Query Parameters**:
  - `markets` (array, required): Array of market identifiers.
- **Response**: JSON array of ticker data.

#### Get Ticker Data for a Specific Market

- **Endpoint**: `/api/v3/ticker`
- **Method**: `GET`
- **Description**: Get ticker data for a specific market.
- **Query Parameters**:
  - `market` (string, required): Market identifier.
- **Response**: JSON object with ticker data.

---

## Usage

To use these APIs, send HTTP requests to the corresponding endpoints with the appropriate HTTP method and parameters.

Example using `curl`:

```bash
curl -X GET "https://max-api.maicoin.com/api/v3/wallet/m/index_prices" -H "accept: application/json"
