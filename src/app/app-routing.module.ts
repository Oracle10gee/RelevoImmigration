import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './@components/auth/login/login.component';
import { ForgotPasswordComponent } from './@components/auth/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', component: LoginComponent },   // Default route
  { path: 'forgot-password', component: ForgotPasswordComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }