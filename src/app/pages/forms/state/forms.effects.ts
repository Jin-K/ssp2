import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { formActions } from './forms.actions';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { WordpressConnectorService } from '../../../@core/utils/wordpress-connector.service';

@Injectable()
export class FormsEffects {
    constructor(
        private readonly action$: Actions,
        private readonly wordpressConnectorService: WordpressConnectorService,
    ) {}

    savePlayer$: Observable<Action> = createEffect(() =>
        this.action$.pipe(
            ofType(formActions.SavePlayer),
            switchMap(action => this.wordpressConnectorService.saveProject(action).pipe(
                map(response => formActions.SavePlayerSucceeded({response})),
                catchError(error => of(formActions.SavePlayerFailed(error))),
            )),
        ),
    );

    savePlayerFailed$: Observable<any> = createEffect(() =>
        this.action$.pipe(
            ofType(formActions.SavePlayerFailed),
            tap(error => console.warn('error', error)),
        )
    , { dispatch: false });
}
