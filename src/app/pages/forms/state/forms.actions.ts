import { Action } from '@ngrx/store';

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

export declare type FormsAction
    = FormsActions.SavePlayer;
