import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const AppRoutes: Routes = [ {
  path: 'list',
  loadChildren: './lazy/purchase-list/purchase-list.module#PurchaseListModule'
}]
