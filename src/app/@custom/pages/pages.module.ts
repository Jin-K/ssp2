import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { FormPlayerListComponent } from './player/form-player-list/form-player-list.component';
import { FormPlayerComponent } from './player/form-player/form-player.component';
import { ThemeModule } from '../../@theme/theme.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NbInputModule, NbCardModule, NbButtonModule, NbDatepickerModule, NbSelectModule, NbAccordionModule, NbMenuModule } from '@nebular/theme';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { formsReducer } from './player/state/forms.reducers';
import { FORMS_INITIAL_STATE, FormsEffects } from './player';
import { PagesComponent } from './pages.component';



@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,

    // todo: move this to player.module
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbDatepickerModule,
    NbSelectModule,
    NbAccordionModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('forms', formsReducer, { initialState: FORMS_INITIAL_STATE }),
    EffectsModule.forFeature([FormsEffects]),
  ],
  declarations: [
    PagesComponent,

    // todo: move this to player.module
    FormPlayerListComponent,
    FormPlayerComponent,
  ],
})
export class PagesModule { }
