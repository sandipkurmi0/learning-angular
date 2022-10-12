import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';

import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { EmployeeDashboardModule } from './employee-dashboard/employee-dashboard.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    //angular modules
    BrowserModule,
    CommonModule,
    //custom modules
    PassengerDashboardModule,
    MatNativeDateModule,
    EmployeeDashboardModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
