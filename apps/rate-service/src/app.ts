import express from 'express';

import { fetchForexRate } from './utils/fetchForexRate';
import config from './config/config';
const host = config.DB.DB_HOST;
const port = config.DB.DB_PORT;

const app = express();

app.get('/rate', async (req, res) => {
  try {
    const currencyPair = req.query.currencyPair as string; // Assuming currencyPair is passed as a query parameter
    const rate = await fetchForexRate(currencyPair);
    res.send({ rate });
  } catch (error: any) {
    res.status(500).send({ error: 'Failed to fetch rate' });
  }
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
