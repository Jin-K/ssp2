import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';

import { Player } from './player.service';
import { Observable } from 'rxjs';
import { AppState } from '../../store';
import { playerSelectors, playerActions } from './state';
import { Injectable } from '@angular/core';
import { first, filter, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PlayerResolver implements Resolve<Player> {

  constructor(private readonly store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Player> {
    const id = +route.paramMap.get('id');
    return this.store
      .select(playerSelectors.item, { id })
      .pipe(
        tap(player => {
          if (player === undefined) {
            this.store.dispatch(playerActions.GetPlayer({id}));
          }
        }),
        filter(player => player !== undefined),
        first(),
      );
  }

}
