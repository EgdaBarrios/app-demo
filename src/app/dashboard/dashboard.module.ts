import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from '../layouts/components/header/header.component';
import { AsideComponent } from '../layouts/components/aside/aside.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { DriversComponent } from './drivers/drivers.component';
import { ClientsComponent } from './clients/clients.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    AsideComponent,
    HomeAdminComponent,
    DriversComponent,
    ClientsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbModule
  ]
})
export class DashboardModule { }
