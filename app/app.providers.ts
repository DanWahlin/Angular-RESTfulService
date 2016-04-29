import { bind } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { DataService } from './shared/services/data.service';


export const APP_PROVIDERS = [
    DataService,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    //bind(LocationStrategy).toClass(HashLocationStrategy)
];