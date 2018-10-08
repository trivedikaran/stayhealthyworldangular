import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule, MatCardContent } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule, MatIconModule, MatTabsModule, MatSidenavModule, MatButtonToggleModule } from '@angular/material';
import { CoreModule } from '../core/core.module';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardCrmModule } from '../dashboard-crm/dashboard-crm.module';
import { FlexLayoutModule } from '@angular/flex-layout';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
];

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    MatCardModule,
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [LoginComponent],
  exports: [
    RouterModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})

export class LoginModule { }
