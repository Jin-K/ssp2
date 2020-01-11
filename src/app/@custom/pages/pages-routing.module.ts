import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth-guard.service';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'player',
      canActivate: [AuthGuard],
      loadChildren: () => import('./player/player.module')
        .then(m => m.PlayerModule),
    },
    {
      path: '',
      redirectTo: 'player',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
