import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'pages',
        loadChildren: () => import('app/@custom/pages/pages.module')
          .then(m => m.PagesModule),
      },
      {
        path: '',
        redirectTo: '/custom/pages',
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
