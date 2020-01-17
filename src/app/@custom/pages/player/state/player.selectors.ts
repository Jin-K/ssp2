import { createFeatureSelector } from '@ngrx/store';
import { PlayerState } from '.';

export namespace PlayerSelectors {
  export const getState = createFeatureSelector<PlayerState>('player');
}
