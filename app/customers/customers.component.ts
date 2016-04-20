import { Component, OnInit } from 'angular2/core';
import { Observable } from 'rxjs/Rx';

import { DataService } from '../shared/services/data.service';

@Component({
    selector: 'customers',
    templateUrl: 'app/customers/customers.component.html'
})
export class CustomersComponent implements OnInit {
    
    customers: any[] = [];

    constructor(private _dataService: DataService) {  }

    ngOnInit() { 
        this._dataService.getCustomersSummary()
            .subscribe((data) => this.customers = data);
    }

}