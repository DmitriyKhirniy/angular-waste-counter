
import { Observable } from 'rxjs/Observable';
import { Purchase } from '../models/purchase';

import 'rxjs/add/observable/of';
import { Currency } from '../models/currency';
import { Injectable } from '@angular/core';
import { PaymentType } from '../models/shared';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PurchaseRepository {

  constructor(private httpClient: HttpClient) {}

  public getPurchases(userId: number = 1): Observable<any> {
    return this.httpClient.get(`http://localhost:8000/api/purchases/${userId}`)
  }

  public getList(): Observable<Purchase[]> {
    return Observable.of([
      {
        id: 1,
        amount: {
          value: 1,
          currency: Currency.Uah
        },
        description: 'Test 1 purchase',
        title: 'Something important 1',
        payment: {
          type: PaymentType.Cash
        }
      },
      {
        id: 2,
        amount: {
          value: 217.10,
          currency: Currency.Uah
        },
        description: 'Test 2 purchase',
        title: 'Something important 1',
        payment: {
          type: PaymentType.Cash
        }
      },
      {
        id: 3,
        amount: {
          value: 95.10,
          currency: Currency.Uah
        },
        description: 'Test 3 purchase',
        title: 'Something important 1',
        payment: {
          type: PaymentType.Cash
        }
      }
    ]);
  }
}
