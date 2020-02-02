import { props } from '@ngrx/store';
import { createPrefixedAction } from '../../../utils';
import { Player } from '../player.service';

const PREFIX = '[PLAYER]';

enum FormActionLabels {
  GET_PLAYER = 'GET_PLAYER',
  GET_PLAYER_SUCCEEDED = 'GET_PLAYER_SUCCEEDED',
  GET_PLAYER_FAILED = 'GET_PLAYER_FAILED',
  GET_PLAYERS = 'GET_PLAYERS',
  GET_PLAYERS_SUCCEEDED = 'GET_PLAYERS_SUCCEEDED',
  GET_PLAYERS_FAILED = 'GET_PLAYERS_FAILED',
  SAVE_PLAYER = 'SAVE_PLAYER',
  SAVE_PLAYER_SUCCEEDED = 'SAVE_PLAYER_SUCCEEDED',
  SAVE_PLAYER_FAILED = 'SAVE_PLAYER_FAILED',
}

export const playerActions = {
  GetPlayer: createPrefixedAction(PREFIX, FormActionLabels.GET_PLAYER, props<{id: number}>()),
  GetPlayerSucceeded: createPrefixedAction(PREFIX, FormActionLabels.GET_PLAYER_SUCCEEDED, props<{ player: Player }>()),
  GetPlayerFailed: createPrefixedAction(PREFIX, FormActionLabels.GET_PLAYER_FAILED, props<object>()),
  GetPlayers: createPrefixedAction(PREFIX, FormActionLabels.GET_PLAYERS),
  GetPlayersSucceeded: createPrefixedAction(PREFIX, FormActionLabels.GET_PLAYERS_SUCCEEDED, props<{ players: Player[] }>()),
  GetPlayersFailed: createPrefixedAction(PREFIX, FormActionLabels.GET_PLAYERS_FAILED, props<object>()),
  SavePlayer: createPrefixedAction(PREFIX, FormActionLabels.SAVE_PLAYER, props<{ readonly data: object }>()),
  SavePlayerSucceeded: createPrefixedAction(PREFIX, FormActionLabels.SAVE_PLAYER_SUCCEEDED, props<{ readonly response: object }>()),
  SavePlayerFailed: createPrefixedAction(PREFIX, FormActionLabels.SAVE_PLAYER_FAILED, props<object>()),
};

export declare type PlayerAction
  = typeof playerActions.GetPlayers
  | typeof playerActions.GetPlayersSucceeded
  | typeof playerActions.GetPlayersFailed
  | typeof playerActions.SavePlayer
  | typeof playerActions.SavePlayerSucceeded
  | typeof playerActions.SavePlayerFailed;
