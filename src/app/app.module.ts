import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { LoginModule } from './login/login.module';
import { DashboardCrmComponent } from './dashboard-crm/dashboard-crm.component';
import { DashboardCrmModule } from './dashboard-crm/dashboard-crm.module';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatTabsModule, MatSidenavModule } from '@angular/material';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { LayoutComponent } from './layouts/layout/layout.component';
import { LayoutModule } from './layouts/layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    DashboardCrmModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    CoreModule,
    MatSidenavModule,
    PerfectScrollbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    DashboardCrmModule,
    HttpClientModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
