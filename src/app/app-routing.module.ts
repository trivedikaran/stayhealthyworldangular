import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { DashboardCrmComponent } from './dashboard-crm/dashboard-crm.component';


const routes: Routes = [
    {
        path: '', component: LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './layouts/layout/layout.module#LayoutModule'
            }]
    },
    { path: '**', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }