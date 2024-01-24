import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginRegisterComponent } from './modules/login-register/login-register.component';
import { DashboardEmployeeComponent } from './modules/dashboard-employee/dashboard-employee.component';
import { ToastrModule } from 'ngx-toastr';
import { CustomToastModule } from './shared/components/custom-toast/custom-toast.module';
import { SharedModule } from './shared/shared.module';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { MatCommonModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent
    // LoginRegisterComponent,
    // DashboardEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    SharedModule,
  ],
  providers: [
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
