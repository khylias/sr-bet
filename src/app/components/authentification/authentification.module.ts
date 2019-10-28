import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordInspectorDirective } from 'src/app/directives/password-inspector.directive';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, PasswordInspectorDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'connexion',
        component: LoginComponent
      },
      {
        path: 'inscription',
        component: RegisterComponent
      },
      {
        path: '**',
        redirectTo: 'connexion',
        pathMatch: 'full',
      }
    ])
  ]
})
export class AuthentificationModule { }
