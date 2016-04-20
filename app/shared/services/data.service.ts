import { Injectable } from 'angular2/core';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { ICustomer } from '../interfaces';

@Injectable()
export class DataService {
    
    private _url: string = 'api/dataservice/';
    
    constructor(private _http: Http) { }
    
    getCustomersSummary() : Observable<ICustomer[]> {
        return this._http.get(this._url + 'customers')
                   .map((resp: Response) => resp.json())
                   .catch(this.handleError);
    }
    
    updateCustomer(customer: ICustomer) {
      //Set proper info for header
      let headers = new Headers({ 'content-type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
        
      return this._http.put(this._url + 'putCustomer/' + customer.id, 
                            JSON.stringify(customer), options)
                 .map((response: Response) => {
                   return response.json();
                 });
    }
    
    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
}
