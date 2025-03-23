/* eslint-disable @typescript-eslint/no-explicit-any */

import 'dotenv/config';

interface IConfig {
  DB: {
    readonly DB_HOST: string | any;
    readonly DB_PORT: string | any;
    readonly DB_USER: string | any;
    readonly DB_PASSWORD: string | any;
    readonly DB_NAME: string | any;
  };
}
const config: IConfig = {
  DB: {
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
  },
};
export default config;
