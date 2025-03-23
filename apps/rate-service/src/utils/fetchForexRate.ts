import axios from 'axios';
import Config from '../config/config';
export async function fetchForexRate(currencyPair: string): Promise<number> {
  const response = await axios.get(
    `https://api.exchangerate-api.com/v4/latest/${currencyPair}`,
    {
      headers: {
        Authorization: `Bearer ${Config.EXCHANGE_RATE_API}`,
      },
    }
  );
  return response.data.rates[currencyPair] || 1.2; // Adjust as necessary
}
