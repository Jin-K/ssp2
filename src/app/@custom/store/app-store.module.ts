import { NgModule, ModuleWithProviders } from '@angular/core';
import { ActionReducerMap, StoreRootModule, RuntimeChecks, StoreModule } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { RouterState, StoreRouterConnectingModule, RouterStateSerializer, routerReducer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppState } from './app.state';
import { CustomRouterStateSerializer, RouterEffects } from './router';

const appReducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};

@NgModule({
  declarations: [],
  imports: getImports(appReducers),
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomRouterStateSerializer,
    },
  ],
})
export class AppStoreModule {}

function getImports(reducers: ActionReducerMap<AppState>): ModuleWithProviders<StoreRootModule>[] {
  const devMode = !environment.production;
  const runtimeChecks: RuntimeChecks = {
    strictActionImmutability: devMode,
    strictActionSerializability: devMode,
    strictStateImmutability: devMode,
    strictStateSerializability: devMode,
  };
  const imports = [
    StoreModule.forRoot(reducers, { metaReducers: [], runtimeChecks }),
    EffectsModule.forRoot([RouterEffects]),
    StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }),
  ];
  if (devMode) {
    imports.push(StoreDevtoolsModule.instrument({ maxAge: environment.devToolsMaxAge }));
  }
  return imports;
}
