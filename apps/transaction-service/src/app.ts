import express, { Request, Response } from 'express';
import { AppDataSource } from './data-source';
import { Transaction } from './entities/Transaction';
import publishToRabbitMQ from './rabbitmq';
const app = express();
app.use(express.json());

// Endpoint to place a buy/sell order
app.post('/order', async (req: Request, res: Response) => {
  const { userId, currencyPair, amount, rate, type } = req.body;

  if (!['buy', 'sell'].includes(type)) {
    return res.status(400).json({ error: 'Invalid transaction type' });
  }

  const transactionRepo = AppDataSource.getRepository(Transaction);
  const transaction = transactionRepo.create({
    userId,
    currencyPair,
    amount,
    rate,
    type,
  });

  await transactionRepo.save(transaction);

  // Publish a message to RabbitMQ for notifications
  await publishToRabbitMQ(
    userId,
    `Your ${type} order of ${amount} ${currencyPair} has been placed.`
  );

  res.json(transaction);
});

// Endpoint to view transaction history
app.get('/transactions/:userId', async (req, res) => {
  const transactions = await AppDataSource.getRepository(Transaction).find({
    where: { userId: req.params.userId },
    order: { createdAt: 'DESC' },
  });

  res.json(transactions);
});

// Initialize database connection before starting the server
AppDataSource.initialize()
  .then(() => {
    // Start the server
    app.listen(3002, () =>
      console.log('Transaction Service Running on Port 3002')
    );
  })
  .catch((error) => console.log(error));
