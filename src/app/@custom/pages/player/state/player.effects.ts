import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { playerActions } from './player.actions';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { WordpressConnectorService } from '../../../services/wordpress-connector.service';

@Injectable()
export class PlayerEffects {
  constructor(
    private readonly action$: Actions,
    private readonly wordpressConnectorService: WordpressConnectorService,
  ) { }

  savePlayer$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(playerActions.SavePlayer),
      switchMap(action => this.wordpressConnectorService.saveProject(action).pipe(
        map(response => playerActions.SavePlayerSucceeded({ response })),
        catchError(error => of(playerActions.SavePlayerFailed(error))),
      )),
    ),
  );

  savePlayerFailed$: Observable<any> = createEffect(() =>
    this.action$.pipe(
      ofType(playerActions.SavePlayerFailed),
      tap(error => console.warn('error', error)),
    )
    , { dispatch: false });
}
