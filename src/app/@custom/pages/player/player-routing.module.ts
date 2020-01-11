import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { PlayerListComponent } from './player-list/player-list.component';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: PlayerListComponent,
    },
    {
      path: 'edit',
      component: PlayerEditComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerRoutingModule {
}
