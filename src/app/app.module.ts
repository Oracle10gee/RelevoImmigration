import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './@components/admin-dashboard/dashboard-home/modal-content/modal-content.component';
import { TabsComponent } from './utils/tabs/tabs.component';
import { PillsComponent } from './utils/pills/pills.component';
import { CoreTabsComponent } from './utils/core-tabs/core-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    DashboardHomeComponent,
    PayNowComponent,
    SettingsComponent,
    ContactUsComponent,
    BankTransferComponent,
    OtpComponent,
    TransferSuccessComponent,
    ModalContentComponent,
    TabsComponent,
    PillsComponent,
    CoreTabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
