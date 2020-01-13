import { NgModule } from '@angular/core';
import { NbBadgeModule } from '@nebular/theme';
import { UserComponent } from './user.component';
import { CommonModule } from '@angular/common';

const USER_COMPONENTS = [
  UserComponent,
];

@NgModule({
  imports: [
    CommonModule,
    NbBadgeModule,
  ],
  declarations: [
    ...USER_COMPONENTS,
  ],
  exports: [
    ...USER_COMPONENTS,
  ],
})
export class UserModule {}
