import { DataSource } from 'typeorm';
import { Wallet } from './entities/Wallet';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'your_username',
  password: 'your_password',
  database: 'wallet_db',
  entities: [Wallet],
  synchronize: true, // set to false in production
});
