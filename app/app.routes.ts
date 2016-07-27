import { provideRouter, RouterConfig } from '@angular/router';

import { CustomersComponent }     from './customers/customers.component';

const APP_ROUTES: RouterConfig = [
  { path: '',  pathMatch:'full', redirectTo: '/customers' },
  { path: 'customers', component: CustomersComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(APP_ROUTES)
];