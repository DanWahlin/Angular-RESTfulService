System.register(['angular2/core', '../shared/services/data.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, data_service_1;
    var CustomersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            CustomersComponent = (function () {
                function CustomersComponent(_dataService) {
                    this._dataService = _dataService;
                    this.customers = [];
                    this.editId = 0;
                }
                CustomersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._dataService.getCustomersSummary()
                        .subscribe(function (data) { return _this.customers = data; });
                };
                CustomersComponent.prototype.save = function (customer) {
                    var _this = this;
                    this._dataService.updateCustomer(customer)
                        .subscribe(function (status) {
                        if (status)
                            _this.editId = 0;
                        else
                            _this.errorMessage = 'Unable to save customer';
                    });
                };
                CustomersComponent = __decorate([
                    core_1.Component({
                        selector: 'customers',
                        templateUrl: 'app/customers/customers.component.html'
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], CustomersComponent);
                return CustomersComponent;
            }());
            exports_1("CustomersComponent", CustomersComponent);
        }
    }
});
//# sourceMappingURL=customers.component.js.map