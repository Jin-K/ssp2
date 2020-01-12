import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module')
          .then(m => m.PagesModule),
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module')
          .then(m => m.AuthModule),
      },
      {
        path: '',
        redirectTo: 'pages',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'pages',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomRoutingModule {
}
