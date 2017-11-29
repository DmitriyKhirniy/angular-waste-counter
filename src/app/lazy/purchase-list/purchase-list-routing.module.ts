import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PurchaseListComponent } from './purchase-list.component';

const routes: Routes = [{
  path: '',
  component: PurchaseListComponent
}];
export const PurchaseListRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
