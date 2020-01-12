import { NgModule } from '@angular/core';

import { PlayerRoutingModule } from './player-routing.module';
import { NbInputModule, NbCardModule, NbButtonModule, NbDatepickerModule, NbSelectModule, NbAccordionModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { playerReducer } from './state/player.reducers';
import { PLAYER_INITIAL_STATE, PlayerEffects } from '.';
import { EffectsModule } from '@ngrx/effects';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { CustomThemeModule } from '../../theme/theme.module';
import { PlayerService } from './player.service';

@NgModule({
  imports: [
    CustomThemeModule,
    PlayerRoutingModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbDatepickerModule,
    NbSelectModule,
    NbAccordionModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('player', playerReducer, { initialState: PLAYER_INITIAL_STATE }),
    EffectsModule.forFeature([PlayerEffects]),
  ],
  declarations: [
    PlayerListComponent,
    PlayerEditComponent,
  ],
  providers: [
    PlayerService,
  ],
})
export class PlayerModule { }
