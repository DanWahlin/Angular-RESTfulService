import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/services/data.service';
import { ICustomer } from '../shared/interfaces';

@Component({
    moduleId: module.id,
    selector: 'customers',
    templateUrl: 'customers.component.html'
})
export class CustomersComponent implements OnInit {
    
    customers: ICustomer[] = [];
    editId: number = 0;
    errorMessage: string;

    constructor(private dataService: DataService) {  }

    ngOnInit() { 
        this.dataService.getCustomersSummary()
            .subscribe((data: ICustomer[]) => this.customers = data);
    }
    
    save(customer: ICustomer) {
        this.dataService.updateCustomer(customer)
            .subscribe((status: boolean) => {
                if (status) {
                    this.editId = 0;
                } else {
                    this.errorMessage = 'Unable to save customer';
                }
            })
    }

}