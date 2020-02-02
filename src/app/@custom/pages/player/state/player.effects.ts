import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { playerActions } from './player.actions';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { PlayerService } from '../player.service';
import { NbToastrService, NbComponentStatus, NbGlobalPhysicalPosition } from '@nebular/theme';

@Injectable()
export class PlayerEffects {
  private readonly serializeError = (error: any): object => JSON.parse(JSON.stringify(error));

  constructor(
    private readonly action$: Actions,
    private readonly playerService: PlayerService,
    private readonly toastrService: NbToastrService,
  ) { }

  getPlayer$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(playerActions.GetPlayer),
      switchMap(({id}) => this.playerService.getPlayer(id).pipe(
        map(player => playerActions.GetPlayerSucceeded({player})),
        catchError(error => of(playerActions.GetPlayerFailed(this.serializeError(error)))),
      )),
    ),
  );

  getPlayers$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(playerActions.GetPlayers),
      switchMap(_ => this.playerService.getPlayers().pipe(
        map(players => playerActions.GetPlayersSucceeded({players})),
        catchError(error => of(playerActions.GetPlayersFailed(this.serializeError(error)))),
      )),
    ),
  );

  getPlayersFailed$: Observable<any> = createEffect(() =>
    this.action$.pipe(
      ofType(playerActions.GetPlayersFailed),
      tap(error => {
        this.showToast(error);
        console.warn('error', error);
      }),
    ),
    { dispatch: false },
  );

  savePlayer$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(playerActions.SavePlayer),
      switchMap(action => this.playerService.savePlayer(action).pipe(
        map(response => playerActions.SavePlayerSucceeded({ response })),
        catchError(error => of(playerActions.SavePlayerFailed(this.serializeError(error)))),
      )),
    ),
  );

  savePlayerFailed$: Observable<any> = createEffect(() =>
    this.action$.pipe(
      ofType(playerActions.SavePlayerFailed),
      tap(error => {
        this.showToast(error);
        console.warn('error', error);
      }),
    ),
    { dispatch: false },
  );

  // TODO: move this to a global application effects service (e.g. AppEffects)
  private showToast(error: object): void {
    error = error['error'] || error;
    const title = 'Something went wrong !';
    const body = error['message'] || '';
    const config = {
      status: 'danger' as NbComponentStatus,
      destroyByClick: true,
      duration: 5 * 1000,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
    };

    this.toastrService.show(body, title, config);
  }
}
