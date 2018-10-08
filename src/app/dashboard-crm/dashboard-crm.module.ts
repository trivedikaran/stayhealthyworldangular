import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCrmComponent } from './dashboard-crm.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { DashboardWidgetModule } from '../dashboard-widget/dashboard-widget.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    DashboardWidgetModule
  ],
  declarations: [DashboardCrmComponent],
  exports: [ ]
})
export class DashboardCrmModule { }
