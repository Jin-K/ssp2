import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './router';
import { PlayerState } from '../pages/player/state';

export declare interface AppState {
    router: RouterReducerState<RouterStateUrl>;
    player?: PlayerState;
}
