/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { NextFunction, Request, Response } from 'express';
import { AppDataSource } from './data-source';
import { User } from './entities/User';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import './types/express';
import Config from './config/config';
const app = express();
app.use(express.json());

function authenticateToken(
  req: Request | any,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, Config.JWT_SECRET, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Endpoint to register a new user
app.post('/users/register', async (req, res) => {
  const { email, password } = req.body;

  const userRepository = AppDataSource.getRepository(User);
  const existingUser = await userRepository.findOne({ where: { email } });

  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }

  const user = userRepository.create({ email, password });
  await userRepository.save(user);

  res.status(201).json({ message: 'User registered successfully' });
});

// Endpoint to log in and generate a JWT token
app.post('/users/login', async (req, res) => {
  const { email, password } = req.body;

  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    Config.JWT_SECRET,
    {
      expiresIn: '1h',
    }
  );
  res.json({ token });
});

// Protected endpoint example
app.get('/users/profile', authenticateToken, (req, res) => {
  res.json({ user: req.user });
});

// Initialize database connection before starting the server
AppDataSource.initialize()
  .then(() => {
    app.listen(3001, () =>
      console.log('User Auth Service Running on Port 3001')
    );
  })
  .catch((error) => console.log(error));
