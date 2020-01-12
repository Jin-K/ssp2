import { props } from '@ngrx/store';
import { createAction2, createAction } from '../../../utils';
import { Player } from '../player.service';

const ACTIONS_PREFIX = '[PLAYER] ';

enum FormActionLabels {
  GET_PLAYERS = 'GET_PLAYERS',
  GET_PLAYERS_SUCCEEDED = 'GET_PLAYERS_SUCCEEDED',
  GET_PLAYERS_FAILED = 'GET_PLAYERS_FAILED',
  SAVE_PLAYER = 'SAVE_PLAYER',
  SAVE_PLAYER_SUCCEEDED = 'SAVE_PLAYER_SUCCEEDED',
  SAVE_PLAYER_FAILED = 'SAVE_PLAYER_FAILED',
}

export const playerActions = {
  GetPlayers: createAction(ACTIONS_PREFIX, FormActionLabels.GET_PLAYERS),
  GetPlayersSucceeded: createAction2(ACTIONS_PREFIX, FormActionLabels.GET_PLAYERS_SUCCEEDED, props<{ items: Player[] }>()),
  GetPlayersFailed: createAction2(ACTIONS_PREFIX, FormActionLabels.GET_PLAYERS_FAILED, props<object>()),
  SavePlayer: createAction2(ACTIONS_PREFIX, FormActionLabels.SAVE_PLAYER, props<{ readonly data: object }>()),
  SavePlayerSucceeded: createAction2(ACTIONS_PREFIX, FormActionLabels.SAVE_PLAYER_SUCCEEDED, props<{ readonly response: object }>()),
  SavePlayerFailed: createAction2(ACTIONS_PREFIX, FormActionLabels.SAVE_PLAYER_FAILED, props<object>()),
};

export declare type PlayerAction
  = typeof playerActions.GetPlayers
  | typeof playerActions.GetPlayersSucceeded
  | typeof playerActions.GetPlayersFailed
  | typeof playerActions.SavePlayer
  | typeof playerActions.SavePlayerSucceeded
  | typeof playerActions.SavePlayerFailed;
