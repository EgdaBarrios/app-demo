import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthFormComponent } from '../components/auth-form/auth-form.component';
// Forms
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    AuthFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
