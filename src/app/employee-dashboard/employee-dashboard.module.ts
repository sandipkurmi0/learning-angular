import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDashboardComponent } from './containers/employee-dashboard/employee-dashboard.component';

@NgModule({
  declarations: [EmployeeDashboardComponent],
  imports: [CommonModule],
  exports: [EmployeeDashboardComponent],
})
export class EmployeeDashboardModule {}
