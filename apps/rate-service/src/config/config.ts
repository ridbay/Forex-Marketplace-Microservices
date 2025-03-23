/* eslint-disable @typescript-eslint/no-explicit-any */

import 'dotenv/config';

interface IConfig {
  readonly EXCHANGE_RATE_API: string | any;
  DB: {
    readonly DB_HOST: string | any;
    readonly DB_PORT: string | any;
  };
}
const config: IConfig = {
  EXCHANGE_RATE_API: process.env.EXCHANGE_RATE_API,
  DB: {
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
  },
};
export default config;
