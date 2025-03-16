import express from 'express';
import 'reflect-metadata';
import { Wallet } from './entities/Wallet';
import { AppDataSource } from './data-source';
AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

const app = express();
app.use(express.json());

app.get('/balance/:userId', async (req, res) => {
  const wallet = await AppDataSource.getRepository(Wallet).findOne({
    where: { userId: req.params.userId },
  });
  res.json(wallet);
});

app.post('/credit', async (req, res) => {
  const { userId, amount } = req.body;
  const wallet = await AppDataSource.getRepository(Wallet).findOne({
    where: { userId },
  }); // Use AppDataSource

  if (!wallet) {
    return res.status(404).json({ message: 'Wallet not found' }); // Handle wallet not found
  }

  wallet.balance += amount;
  await AppDataSource.getRepository(Wallet).save(wallet); // Use AppDataSource
  res.json(wallet);
});

app.listen(3000, () => console.log('Wallet Service Running on Port 3000'));
