import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl, ROUTER_INITIAL_STATE } from './router';
import { PlayerState } from '../pages/player/state';
import { UiState, UI_INITIAL_STATE } from './ui';

export declare interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  player?: PlayerState;
  ui: UiState;
}

export const APP_INITIAL_STATE: AppState = {
  router: ROUTER_INITIAL_STATE,
  ui: UI_INITIAL_STATE,
};
