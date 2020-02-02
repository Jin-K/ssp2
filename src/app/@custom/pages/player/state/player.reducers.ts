import { playerActions, PlayerAction } from './player.actions';
import { combineReducers, createReducer, on } from '@ngrx/store';
import { PlayerState, PLAYER_INITIAL_STATE } from '.';
import { adapter } from './player.adapter';

const childrenReducer = combineReducers<Partial<PlayerState>, PlayerAction>({

});

const reducer = createReducer(
    PLAYER_INITIAL_STATE,
    on(playerActions.GetPlayerSucceeded, (state, { player }) => adapter.addOne(player, state)),
    on(playerActions.GetPlayersSucceeded, (state, { players }) => adapter.addAll(players, state)),
);

export function playerReducer(state: PlayerState, action: PlayerAction): PlayerState {
    const intermediateState = {
        ...state,
        ...childrenReducer,
    };
    return reducer(intermediateState, action);
}
