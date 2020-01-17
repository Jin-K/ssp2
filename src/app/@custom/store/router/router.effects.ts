import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { RouterNavigationAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { tap, map, withLatestFrom } from 'rxjs/operators';
import { NbThemeService } from '@nebular/theme';
import { Store, select } from '@ngrx/store';
import { AppState } from '..';
import { appSelectors } from '../app.selectors';

@Injectable()
export class RouterEffects {
  constructor(
    private readonly store: Store<AppState>,
    private readonly actions$: Actions,
    private readonly themeService: NbThemeService,
  ) { }

  @Effect({ dispatch: false })
  public navigation$ = this.actions$.pipe(
    ofType<RouterNavigationAction>(ROUTER_NAVIGATION),
    map(({ payload }) => payload),
    withLatestFrom(this.store.pipe(select(appSelectors.ui.theme))),
    tap(([{ routerState, event }, selectedTheme]) => {
      console.info(`Trying to reach route '${event.url}', router navigation to ${routerState.url}`);
      const isCustomRoute = routerState.url.startsWith('/custom');
      const { currentTheme } = this.themeService;
      if (isCustomRoute && currentTheme !== selectedTheme) {
        this.themeService.changeTheme(selectedTheme);
      }
    }),
  );
}
