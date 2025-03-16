import { DataSource } from 'typeorm';
import { Transaction } from './entities/Transaction';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'your_username',
  password: 'your_password',
  database: 'transaction_db',
  entities: [Transaction],
  synchronize: true, // set to false in production
});
