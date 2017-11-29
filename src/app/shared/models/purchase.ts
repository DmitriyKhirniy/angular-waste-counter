import { Amount } from './amount';
import { Payment } from './payment';

export interface Purchase {
  readonly id: number;
  amount: Amount;
  timestamp?: number;
  description: string;
  title: string;
  payment: Payment;
}
