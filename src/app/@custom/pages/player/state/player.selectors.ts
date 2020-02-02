import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlayerState } from '.';
import { adapter } from './player.adapter';

const selectors = {
  getItem: (state: PlayerState, props: { id: number }) => state.entities[props.id],
};
const featureSelector = createFeatureSelector<PlayerState>('player');

const {
  selectAll,
} = adapter.getSelectors();

export const playerSelectors = {
  item: createSelector(
    featureSelector,
    selectors.getItem,
  ),
  players: createSelector(
    featureSelector,
    selectAll,
  ),
};
