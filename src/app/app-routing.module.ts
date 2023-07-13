import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './@components/auth/login/login.component';
import { ForgotPasswordComponent } from './@components/auth/forgot-password/forgot-password.component';
import { DashboardComponent } from './@components/admin-dashboard/dashboard/dashboard.component';
import { DashboardHomeComponent } from './@components/admin-dashboard/dashboard-home/dashboard-home.component';
import { PayNowComponent } from './@components/admin-dashboard/pay-now/pay-now.component';
import { SettingsComponent } from './@components/admin-dashboard/settings/settings.component';
import { ContactUsComponent } from './@components/admin-dashboard/contact-us/contact-us.component';
import { BankTransferComponent } from './@components/admin-dashboard/dashboard-home/bank-transfer/bank-transfer.component';
import { OtpComponent } from './@components/admin-dashboard/dashboard-home/otp/otp.component';
import { TransferSuccessComponent } from './@components/admin-dashboard/dashboard-home/transfer-success/transfer-success.component';

const routes: Routes = [
  { path: '', component: LoginComponent },   // Default route
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', redirectTo: 'dashboard-home', pathMatch: 'full' },
    { path: 'dashboard-home', component: DashboardHomeComponent },
    { path: 'pay-now', component: PayNowComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'bank-transfer', component: BankTransferComponent },
    { path: 'otp', component: OtpComponent },
    { path: 'transaction-success', component: TransferSuccessComponent },
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
