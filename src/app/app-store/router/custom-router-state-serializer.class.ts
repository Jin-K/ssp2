import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateUrl } from './router-state-url.interface';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Params, Data } from '@angular/router';

export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateUrl> {
    public serialize({root, url}: RouterStateSnapshot): RouterStateUrl {
        const intermediateState: Pick<RouterStateUrl, Exclude<keyof RouterStateUrl, 'lastRouteConfigPath'>> = {
            url: url,
            params: this.mergeRouteInfo(root, ({params}) => params),
            queryParams: this.mergeRouteInfo(root, ({queryParams}) => queryParams),
            data: this.mergeRouteInfo(root, ({data}) => data),
            routeConfigPath: this.mergeRouteConfigPath(root).filter(x => x !== null && x !== undefined),
        };
        const state: RouterStateUrl = {
            ...intermediateState,
            lastRouteConfigPath: intermediateState.routeConfigPath[intermediateState.routeConfigPath.length - 1],
        };
        return state;
    }

    private mergeRouteInfo<T extends Params | Data>(route: ActivatedRouteSnapshot | null, getter: (r: ActivatedRouteSnapshot) => T): T {
        if (route === null) {
            return {} as T;
        }

        const current = getter(route);
        const {firstChild} = route;
        return Object.assign({}, current, this.mergeRouteInfo(firstChild, getter));
    }


    private mergeRouteConfigPath(route: ActivatedRouteSnapshot | null): string[] {
        if (route === null) {
            return [];
        }

        const routeConfig = route.routeConfig;
        if (routeConfig !== null && routeConfig.path !== undefined && routeConfig.path !== '') {
            const {path} = routeConfig;
            return [path, ...this.mergeRouteConfigPath(route.firstChild)];
        } else {
            return this.mergeRouteConfigPath(route.firstChild);
        }
    }
}
