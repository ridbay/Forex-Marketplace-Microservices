import express from 'express';
import * as dotenv from 'dotenv';
import { fetchForexRate } from './utils/fetchForexRate';
dotenv.config();
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

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
