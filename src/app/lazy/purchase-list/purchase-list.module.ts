import { NgModule } from '@angular/core';
import { PurchaseListComponent } from './purchase-list.component';
import { CommonModule } from '@angular/common';
import { PurchaseListRoutingModule } from './purchase-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PurchaseListRoutingModule
  ],
  declarations: [
    PurchaseListComponent
  ],
  exports: [
    PurchaseListComponent
  ]
})
export class PurchaseListModule {}
