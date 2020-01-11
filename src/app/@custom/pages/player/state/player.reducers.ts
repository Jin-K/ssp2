import { playerActions, PlayerAction } from './player.actions';
import { combineReducers, createReducer, on } from '@ngrx/store';
import { PlayerState, PLAYER_INITIAL_STATE } from '.';

const childrenReducer = combineReducers<Partial<PlayerState>, PlayerAction>({

});

const reducer = createReducer(
    PLAYER_INITIAL_STATE,
    on(playerActions.SavePlayer, (state, { type, ...action }) => ({
        ...state,
    })),
);

export function playerReducer(state: PlayerState, action: PlayerAction): PlayerState {
    const intermediateState = {
        ...state,
        ...childrenReducer,
    };
    return reducer(intermediateState, action);
}
