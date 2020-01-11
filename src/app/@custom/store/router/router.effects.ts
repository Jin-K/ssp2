import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { RouterNavigationAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { tap } from 'rxjs/operators';

@Injectable()
export class RouterEffects {
    constructor(private readonly actions$: Actions) {}

    @Effect({dispatch: false})
    public navigation$ = this.actions$.pipe(
        ofType<RouterNavigationAction>(ROUTER_NAVIGATION),
        tap(({payload}) => console.info('router navigation', payload.event.url)),
    );
}
