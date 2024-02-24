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
import { CheckoutTestComponent } from './@components/checkout-test/checkout-test.component';
import { RegisterComponent } from './@components/auth/register/register.component';
import { VerifyEmailComponent } from './@components/auth/verify-email/verify-email.component';
import { ApplicationComponent } from './@components/admin-dashboard/dashboard-home/application/application.component';
import { ApplicationFormComponent } from './@components/admin-dashboard/dashboard-home/application/application-form/application-form.component';
import { UploadDocumentComponent } from './@components/admin-dashboard/dashboard-home/application/upload-document/upload-document.component';
import { AppointmentComponent } from './@components/admin-dashboard/dashboard-home/application/appointment/appointment.component';
import { WebsiteComponent } from './@components/website/website.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }, // Default route
  { path: 'welcome', component: WebsiteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'checkout', component: CheckoutTestComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: DashboardHomeComponent },
      { path: 'pay-now', component: PayNowComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'bank-transfer', component: BankTransferComponent },
      { path: 'otp', component: OtpComponent },
      { path: 'transaction-success', component: TransferSuccessComponent },
      {
        path: 'start-application',
        component: ApplicationComponent,
      },
      { path: 'start-application/form', component: ApplicationFormComponent },
      { path: 'start-application/upload-documents', component: UploadDocumentComponent },
      { path: 'start-application/book-appointment', component: AppointmentComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
