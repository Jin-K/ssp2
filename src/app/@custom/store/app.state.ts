import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './router';
import { FormsState } from '../pages/player/state';

export declare interface AppState {
    router: RouterReducerState<RouterStateUrl>;
    forms?: FormsState;
}
