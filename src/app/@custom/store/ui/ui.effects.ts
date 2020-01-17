import { Effect } from '@ngrx/effects';
import { NbThemeService } from '@nebular/theme';
import { map, filter } from 'rxjs/operators';
import { uiActions } from './ui.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class UiEffects {
  constructor(private readonly themeService: NbThemeService) {}

  @Effect()
  public themeChanged$ = this.themeService.onThemeChange().pipe(
    filter(({previous}) => previous !== undefined),
    map(({name: theme}) => uiActions.SetTheme({theme})),
  );
}
