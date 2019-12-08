import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsModule as ngFormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormPlayerComponent } from './form-player/form-player.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { formsReducer, FORMS_INITIAL_STATE, FormsEffects } from './state';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    StoreModule.forFeature('forms', formsReducer, { initialState: FORMS_INITIAL_STATE }),
    EffectsModule.forFeature([FormsEffects]),
    ReactiveFormsModule,
  ],
  declarations: [
    FormsComponent,
    ButtonsComponent,
    FormInputsComponent,
    FormLayoutsComponent,
    DatepickerComponent,
    FormPlayerComponent,
  ],
})
export class FormsModule { }
