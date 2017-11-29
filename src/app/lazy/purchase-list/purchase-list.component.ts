import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Purchase } from '../../shared/models/purchase';
import { PurchaseRepository } from '../../shared/repositories/purchase.repository';

import 'rxjs/add/operator/do'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-purchase-list-layout',
  templateUrl: './purchase-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurchaseListComponent implements OnInit {

  public purchases$: BehaviorSubject<Purchase[]> = new BehaviorSubject<Purchase[]>([]);
  public purchases1$: BehaviorSubject<Purchase[]> = new BehaviorSubject<Purchase[]>([]);

  public purchases: Purchase[] = [];

  public total: number = 0

  constructor(private purchaseRepository: PurchaseRepository) {}

  public ngOnInit(): void {
    this.purchaseRepository.getList()
      .do((list: Purchase[]) => this.total = this.calculate(list))
      .subscribe(
        (list: any) => {
          console.log('sdfsdf: ', list)
          this.purchases$.next(list);
          this.purchases = list;
        }
      );

    this.purchaseRepository.getPurchases()
      .subscribe(
        (res: any) => this.purchases1$.next(res)
      )
  }

  public calculate(purchases: Purchase[]): number {
    return purchases
      .map((purchase: Purchase) => purchase.amount.value)
      .reduce((current: number, next: number) => current + next, 0);
  }

  public sort(field: string): void {
    // this.purchases = this.purchases.sort((current: Purchase, next: Purchase) => current.amount.value - next.amount.value);
    const list: Purchase[] = this.purchases$.getValue()
    list.sort((current: Purchase, next: Purchase) => current.amount.value - next.amount.value);
    this.purchases$.next(list)
  }

}
