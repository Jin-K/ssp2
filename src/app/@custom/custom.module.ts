import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { WordpressConnectorService } from './services/wordpress-connector.service';
import { throwIfAlreadyLoaded } from '../@core/module-import-guard';
import { AppStoreModule } from './store';
import { NbAuthModule, NbAuthJWTToken, NbAuthJWTInterceptor, NB_AUTH_TOKEN_INTERCEPTOR_FILTER, NbPasswordAuthStrategy } from '@nebular/auth';
import { AuthGuard } from './services/auth-guard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../../environments/environment';

const CUSTOM_PROVIDERS = [
  WordpressConnectorService,
  AuthGuard,
  ...NbAuthModule.forRoot({
    strategies: [
      NbPasswordAuthStrategy.setup({
        name: 'username',
        token: {
          class: NbAuthJWTToken,
          key: 'token',
        },
        baseEndpoint: `${environment.apiEndpoint}/wp-json/jwt-auth/v1`,
        login: {
          // ...
          endpoint: '/token',
          defaultErrors: ['Username/email and password combination is not correct, please try again'],
        },
      }),
    ],
    forms: {
      login: {
        strategy: 'username',
      },
      validation: {
        username: {
          required: true,
          minLength: 3,
          maxLength: 50,
        },
      },
    },
  }).providers,
  { provide: HTTP_INTERCEPTORS, useClass: NbAuthJWTInterceptor, multi: true },
  { provide: NB_AUTH_TOKEN_INTERCEPTOR_FILTER, useValue: _ => false },
];

@NgModule({
  declarations: [],
  imports: [
    AppStoreModule,
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
