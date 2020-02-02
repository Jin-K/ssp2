import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerResolver } from './player.resolver';
import { PlayerConsultComponent } from './player-consult/player-consult.component';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: PlayerListComponent,
    },
    {
      path: 'consult/:id',
      component: PlayerConsultComponent,
      resolve: {
        player: PlayerResolver,
      },
    },
    {
      path: 'edit',
      children: [
        {
          path: '',
          component: PlayerEditComponent,
        },
        {
          path: ':id',
          component: PlayerEditComponent,
          resolve: {
            player: PlayerResolver,
          },
        },
      ],
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerRoutingModule {
}
