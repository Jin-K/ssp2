import { formActions, FormAction } from './forms.actions';
import { combineReducers, createReducer, on } from '@ngrx/store';
import { IFormsState, FORMS_INITIAL_STATE } from '.';

const childrenReducer = combineReducers<Partial<IFormsState>, FormAction>({

});

const reducer = createReducer(
    FORMS_INITIAL_STATE,
    on(formActions.SavePlayer, (state, { type, ...action }) => ({
        ...state,
    })),
);

export function formsReducer(state: IFormsState, action: FormAction): IFormsState {
    const intermediateState = {
        ...state,
        ...childrenReducer,
    };
    return reducer(intermediateState, action);
}
