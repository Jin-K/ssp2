import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth-guard.service';
import { FormPlayerListComponent } from './player/form-player-list/form-player-list.component';
import { FormPlayerComponent } from './player/form-player/form-player.component';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'player',
      canActivate: [AuthGuard],
      children: [
        {
          path: '',
          component: FormPlayerListComponent,
        },
        {
          path: 'edit',
          component: FormPlayerComponent,
        },
      ],
    },
    {
      path: '',
      redirectTo: 'player',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
