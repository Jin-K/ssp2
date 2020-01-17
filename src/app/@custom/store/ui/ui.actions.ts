import { createPrefixedAction } from '../../utils';
import { props } from '@ngrx/store';

const prefix = '[UI]';

enum UiActionLabels {
  SET_THEME = 'SET_THEME',
}

export const uiActions = {
  SetTheme: createPrefixedAction(prefix, UiActionLabels.SET_THEME, props<{ theme: string }>()),
};

export declare type UiAction
  = typeof uiActions.SetTheme;
