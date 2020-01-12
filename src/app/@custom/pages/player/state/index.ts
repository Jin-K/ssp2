import { Player } from '../player.service';

// tslint:disable-next-line:no-empty-interface
export declare interface PlayerState {
  items: Player[];
}

export const PLAYER_INITIAL_STATE: PlayerState = {
  items: undefined,
};

export * from './player.actions';
export * from './player.effects';
export * from './player.selectors';
