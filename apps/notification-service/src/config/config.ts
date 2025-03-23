/* eslint-disable @typescript-eslint/no-explicit-any */

import 'dotenv/config';

interface IConfig {
  readonly SECRET_KEY: string | any;
  readonly RABBITMQ_URL: string | any;
  SMTP: {
    readonly HOST: string | any;
    readonly PORT: string | any;
    readonly USER: string | any;
    readonly PASSWORD: string | any;
  };
}
const config: IConfig = {
  SECRET_KEY: process.env.SECRET_KEY,
  RABBITMQ_URL: process.env.RABBITMQ_URL || 'amqp://localhost',
  SMTP: {
    HOST: process.env.SMTP_HOST,
    PORT: process.env.SMTP_PORT || '587',
    USER: process.env.SMTP_USER,
    PASSWORD: process.env.SMTP_PASSWORD,
  },
};
export default config;
