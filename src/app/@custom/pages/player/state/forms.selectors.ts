import { createFeatureSelector } from '@ngrx/store';
import { FormsState } from '.';

export namespace FormsSelectors {
    export const getState = createFeatureSelector<FormsState>('forms');
}
