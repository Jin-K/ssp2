import { BaseRouterStoreState } from '@ngrx/router-store';
import { Params, Data } from '@angular/router';

export interface RouterStateUrl extends BaseRouterStoreState {
    url: string;
    params?: Params;
    queryParams?: Params;
    data?: Data;
    routeConfigPath: string[];
    lastRouteConfigPath: string;
}
