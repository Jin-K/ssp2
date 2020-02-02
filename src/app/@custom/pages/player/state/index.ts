import { EntityState } from '@ngrx/entity';
import { Player } from '../player.service';
import { adapter } from './player.adapter';

export declare interface PlayerState extends EntityState<Player> {
}

export const PLAYER_INITIAL_STATE: PlayerState = adapter.getInitialState({
});

export * from './player.actions';
export * from './player.effects';
export * from './player.selectors';
