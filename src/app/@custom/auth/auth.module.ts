import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  NbAlertModule,
  NbInputModule,
  NbButtonModule,
  NbCheckboxModule,
  NbIconModule,
} from '@nebular/theme';
import { NbAuthModule } from '@nebular/auth';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbIconModule,
    AuthRoutingModule,
    NbAuthModule,
  ],
  declarations: [
    LoginComponent,
  ],
})
export class AuthModule { }
