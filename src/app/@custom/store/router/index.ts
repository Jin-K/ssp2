import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from '..';

export const ROUTER_INITIAL_STATE: RouterReducerState<RouterStateUrl> = {
  state: {
    url: '/',
    routeConfigPath: [],
    lastRouteConfigPath: '',
  },
  navigationId: -1,
};

export * from './router-state-url.interface';
export * from './custom-router-state-serializer.class';
export * from './router.effects';
