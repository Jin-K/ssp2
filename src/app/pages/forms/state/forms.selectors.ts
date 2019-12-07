import { createFeatureSelector } from '@ngrx/store';
import { IFormsState } from '.';

export namespace FormsSelectors {
    export const getState = createFeatureSelector<IFormsState>('forms');
}
