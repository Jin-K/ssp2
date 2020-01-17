import { createSelector } from '@ngrx/store';
import { AppState } from '.';
import { uiSelectors } from './ui/ui.selectors';

const rootSelectors = {
  selectUi: (state: AppState) => state.ui,
};

export const appSelectors = {
  ui: {
    theme: createSelector(
      rootSelectors.selectUi,
      uiSelectors.getTheme,
    ),
  },
};
