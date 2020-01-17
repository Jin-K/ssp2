import { NgModule, ModuleWithProviders } from '@angular/core';
import { ActionReducerMap, StoreRootModule, RuntimeChecks, StoreModule } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { RouterState, StoreRouterConnectingModule, RouterStateSerializer, routerReducer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppState, APP_INITIAL_STATE } from './app.state';
import { CustomRouterStateSerializer, RouterEffects } from './router';
import { uiReducer } from './ui/ui.reducer';
import { UiEffects } from './ui/ui.effects';

const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  ui: uiReducer,
};

@NgModule({
  declarations: [],
  imports: getImports(),
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomRouterStateSerializer,
    },
  ],
})
export class AppStoreModule {}

function getImports(): ModuleWithProviders<StoreRootModule>[] {
  const devMode = !environment.production;
  const runtimeChecks: RuntimeChecks = {
    strictActionImmutability: devMode,
    strictActionSerializability: devMode,
    strictStateImmutability: devMode,
    strictStateSerializability: devMode,
  };
  const initialState = APP_INITIAL_STATE;
  const imports = [
    StoreModule.forRoot(reducers, { initialState, metaReducers: [], runtimeChecks }),
    EffectsModule.forRoot([RouterEffects, UiEffects]),
    StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }),
  ];
  if (devMode) {
    imports.push(StoreDevtoolsModule.instrument({ maxAge: environment.devToolsMaxAge }));
  }
  return imports;
}
