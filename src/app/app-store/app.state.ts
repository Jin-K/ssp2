import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './router';
import { IFormsState } from '../pages/forms';

export declare interface AppState {
    router: RouterReducerState<RouterStateUrl>;
    forms?: IFormsState;
}
