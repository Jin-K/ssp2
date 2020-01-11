import { formActions, FormAction } from './forms.actions';
import { combineReducers, createReducer, on } from '@ngrx/store';
import { FormsState, FORMS_INITIAL_STATE } from '.';

const childrenReducer = combineReducers<Partial<FormsState>, FormAction>({

});

const reducer = createReducer(
    FORMS_INITIAL_STATE,
    on(formActions.SavePlayer, (state, { type, ...action }) => ({
        ...state,
    })),
);

export function formsReducer(state: FormsState, action: FormAction): FormsState {
    const intermediateState = {
        ...state,
        ...childrenReducer,
    };
    return reducer(intermediateState, action);
}
