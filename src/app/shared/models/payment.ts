import { PaymentType } from './shared';
import { Card } from './card';

export interface Payment {
  type: PaymentType;
  card?: Card;
}
