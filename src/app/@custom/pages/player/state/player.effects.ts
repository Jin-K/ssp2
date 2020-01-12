import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { playerActions } from './player.actions';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { PlayerService } from '../player.service';

@Injectable()
export class PlayerEffects {
  constructor(
    private readonly action$: Actions,
    private readonly playerService: PlayerService,
  ) { }

  getPlayers$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(playerActions.GetPlayers),
      switchMap(_ => this.playerService.getPlayers().pipe(
        map(items => playerActions.GetPlayersSucceeded({items})),
        catchError(error => of(playerActions.GetPlayersFailed(error))),
      )),
    ),
  );

  getPlayersFailed$: Observable<any> = createEffect(() =>
    this.action$.pipe(
      ofType(playerActions.GetPlayersFailed),
      tap(error => console.warn('error', error)),
    ),
    { dispatch: false },
  );

  savePlayer$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(playerActions.SavePlayer),
      switchMap(action => this.playerService.savePlayer(action).pipe(
        map(response => playerActions.SavePlayerSucceeded({ response })),
        catchError(error => of(playerActions.SavePlayerFailed(error))),
      )),
    ),
  );

  savePlayerFailed$: Observable<any> = createEffect(() =>
    this.action$.pipe(
      ofType(playerActions.SavePlayerFailed),
      tap(error => console.warn('error', error)),
    ),
    { dispatch: false },
  );
}
