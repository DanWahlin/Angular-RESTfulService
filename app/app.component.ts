import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteConfig } from '@angular/router';

import { APP_PROVIDERS } from './app.providers';
import { CustomersComponent } from './customers/customers.component';

@Component({ 
  selector: 'app-container',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
  providers: [ APP_PROVIDERS ]
})
@RouteConfig([
  { path: '/', name: 'Customers', component: CustomersComponent, useAsDefault: true }
])
export class AppComponent {
  
  constructor() {

  }
  
}
