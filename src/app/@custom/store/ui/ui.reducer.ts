import { combineReducers, createReducer, on } from '@ngrx/store';
import { UiState, UI_INITIAL_STATE } from '.';
import { UiAction, uiActions } from './ui.actions';

const childrenReducer = combineReducers<Partial<UiState>, UiAction>({

});

const reducer = createReducer(
  UI_INITIAL_STATE,
  on(uiActions.SetTheme, (state, { theme }) => ({
    ...state,
    theme,
  })),
);

export function uiReducer(state: UiState, action: UiAction): UiState {
  const intermediateState = {
    ...state,
    ...childrenReducer,
  };
  return reducer(intermediateState, action);
}
