import { Action, createAction, props } from '@ngrx/store';

const ACTIONS_PREFIX = '[FORMS] ';

export namespace FormsActions {
    export enum Types {
        SAVE_PLAYER = 'SAVE_PLAYER',
    }

    export class SavePlayer implements Action {
        public readonly type = `${ACTIONS_PREFIX}${Types.SAVE_PLAYER}`;

        constructor(public readonly data: any) {}
    }
}

enum FormActionLabels {
    SAVE_PLAYER = 'SAVE_PLAYER',
    SAVE_PLAYER_SUCCEEDED = 'SAVE_PLAYER_SUCCEEDED',
    SAVE_PLAYER_FAILED = 'SAVE_PLAYER_FAILED',
}

export const formActions = {
    SavePlayer: createAction(`${ACTIONS_PREFIX} ${FormActionLabels.SAVE_PLAYER}`, props<{readonly data: object}>()),
    SavePlayerSucceeded: createAction(`${ACTIONS_PREFIX} ${FormActionLabels.SAVE_PLAYER_SUCCEEDED}`, props<{readonly response: object}>()),
    SavePlayerFailed: createAction(`${ACTIONS_PREFIX} ${FormActionLabels.SAVE_PLAYER_FAILED}`, props<object>()),
};

export declare type FormAction
 = typeof formActions.SavePlayer
 | typeof formActions.SavePlayerSucceeded
 | typeof formActions.SavePlayerFailed;
