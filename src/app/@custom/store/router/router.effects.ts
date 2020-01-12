import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { RouterNavigationAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { tap, map } from 'rxjs/operators';
import { NbThemeService } from '@nebular/theme';

@Injectable()
export class RouterEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly themeService: NbThemeService,
    ) {}

    @Effect({dispatch: false})
    public navigation$ = this.actions$.pipe(
        ofType<RouterNavigationAction>(ROUTER_NAVIGATION),
        map(({payload}) => payload),
        tap(({routerState, event}) => {
            console.info(`Trying to reach route '${event.url}', router navigation to ${routerState.url}`);
            // TODO: store manual theme changes, otherwise we are resetting theme on each navigation ...
            const isCustomRoute = routerState.url.startsWith('/custom');
            this.themeService.changeTheme(isCustomRoute ? 'dark' : 'default');
        }),
    );
}
