import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';



@NgModule({
  declarations: [
    AuthLayoutComponent,
    DashboardLayoutComponent,
    HomeLayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
