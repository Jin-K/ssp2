import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlayerState } from '.';

const selectors = {
  getItems: (state: PlayerState) => state.items,
  getItem: (state: PlayerState, props: { id: number }) => state.items.find(item => item.id === props.id),
};
const featureSelector = createFeatureSelector<PlayerState>('player');

export const playerSelectors = {
  items: createSelector(
    featureSelector,
    selectors.getItems,
  ),
  item: createSelector(
    featureSelector,
    selectors.getItem,
  ),
};
