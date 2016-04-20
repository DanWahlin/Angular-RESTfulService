import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataService {
    
    private _url: string = 'api/dataservice/customersSummary';
    
    constructor(private _http: Http) { }
    
    getCustomersSummary() {
        return this._http.get(this._url)
                   .map((resp: Response) => resp.json())
                   .catch(this.handleError);
    }
    
    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
}
