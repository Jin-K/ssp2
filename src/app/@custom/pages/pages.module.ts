import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { NbMenuModule } from '@nebular/theme';
import { CustomThemeModule } from '../theme/theme.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    CustomThemeModule,
    NbMenuModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule { }
