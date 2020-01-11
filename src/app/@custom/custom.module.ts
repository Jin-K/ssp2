import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordpressConnectorService } from './services/wordpress-connector.service';
import { throwIfAlreadyLoaded } from '../@core/module-import-guard';
import { AppStoreModule } from './store';
import { NbAuthModule, NbAuthJWTToken, NbAuthJWTInterceptor, NB_AUTH_TOKEN_INTERCEPTOR_FILTER } from '@nebular/auth';
import { JwtAuthStrategy } from './services/jwt-auth-strategy.service';
import { AuthGuard } from './services/auth-guard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const CUSTOM_PROVIDERS = [
  WordpressConnectorService,
  AuthGuard,
  JwtAuthStrategy,
  { provide: HTTP_INTERCEPTORS, useClass: NbAuthJWTInterceptor, multi: true },
  { provide: NB_AUTH_TOKEN_INTERCEPTOR_FILTER, useValue: _ => false },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppStoreModule,
    NbAuthModule.forRoot({
      strategies: [
        JwtAuthStrategy.setup({
          name: 'username',
          token: {
            class: NbAuthJWTToken,
            key: 'token',
          },
          baseEndpoint: 'https://sport-stat-pro.com/wp-json/jwt-auth/v1',
          login: {
            // ...
            endpoint: '/token',
            defaultErrors: ['Email and password combination is not correct, please try again'],
          },
        }),
      ],
      forms: {
        login: {
          strategy: 'username',
        },
      },
    }),
  ],
})
export class CustomModule {
  constructor(@Optional() @SkipSelf() parentModule: CustomModule) {
    throwIfAlreadyLoaded(parentModule, 'CustomModule');
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CustomModule,
      providers: [
        ...CUSTOM_PROVIDERS,
      ],
    } as ModuleWithProviders;
  }
}
