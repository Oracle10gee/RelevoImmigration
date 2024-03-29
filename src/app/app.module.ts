import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio'
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
import { CheckoutTestComponent } from './@components/checkout-test/checkout-test.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './@components/auth/register/register.component';
import { VerifyEmailComponent } from './@components/auth/verify-email/verify-email.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BarChartComponent } from './utils/charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './utils/charts/pie-chart/pie-chart.component';
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';
import { ApplicationComponent } from './@components/admin-dashboard/dashboard-home/application/application.component';
import { ApplicationFormComponent } from './@components/admin-dashboard/dashboard-home/application/application-form/application-form.component';
import { UploadDocumentComponent } from './@components/admin-dashboard/dashboard-home/application/upload-document/upload-document.component';
import { AppointmentComponent } from './@components/admin-dashboard/dashboard-home/application/appointment/appointment.component';
import { WebsiteComponent } from './@components/website/website.component';
import { HelpDeskModalComponent } from './@components/admin-dashboard/dashboard-home/help-desk-modal/help-desk-modal.component';
import { SlidingCardComponent } from './utils/sliding-card/sliding-card.component';
// import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

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
    CoreTabsComponent,
    CheckoutTestComponent,
    RegisterComponent,
    VerifyEmailComponent,
    BarChartComponent,
    PieChartComponent,
    ApplicationComponent,
    ApplicationFormComponent,
    UploadDocumentComponent,
    AppointmentComponent,
    WebsiteComponent,
    HelpDeskModalComponent,
    SlidingCardComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    NgChartsModule,
    MatExpansionModule,
    CarouselModule.forRoot(),
    AngularFireFunctionsModule,
    MatRadioModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    { provide: NgChartsConfiguration, useValue: { generateColors: false } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
