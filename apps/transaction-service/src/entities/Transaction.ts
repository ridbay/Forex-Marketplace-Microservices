import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userId!: string;

  @Column()
  currencyPair!: string; // e.g., "USD/EUR"

  @Column()
  amount!: number;

  @Column()
  rate!: number;

  @Column()
  type!: 'buy' | 'sell'; // Enum-like behavior

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;
}
