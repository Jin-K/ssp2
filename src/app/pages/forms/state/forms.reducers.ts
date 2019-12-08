import { FormsAction, FormsActions } from './forms.actions';
import { combineReducers, Action } from '@ngrx/store';
import { IFormsState } from '.';

function crossFormsReducer(state: IFormsState, action: FormsAction): IFormsState {
    switch (action.type) {
        case FormsActions.Types.SAVE_PLAYER:
            return {
                ...state,
            };
        default:
            return state;
    }
}

const childrenReducer = combineReducers<Partial<IFormsState>, Action>({

});

export const formsReducer = (state: IFormsState, action: FormsAction) => {
    const intermediateState = {
        ...state,
        ...childrenReducer(state, action),
    };
    return crossFormsReducer(intermediateState, action);
};
