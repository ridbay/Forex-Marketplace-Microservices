import { DataSource } from 'typeorm';
import { Wallet } from './entities/Wallet';
import 'reflect-metadata';
import Config from './src/config/config';
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: Config.DB.DB_HOST,
  port: Config.DB.DB_PORT,
  username: Config.DB.DB_USER,
  password: Config.DB.DB_PASSWORD,
  database: Config.DB.DB_NAME,
  entities: [Wallet],
  synchronize: true, // set to false in production
  logging: false,
});
