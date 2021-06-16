import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
//import { HeaderComponent } from '../layouts/components/header/header.component';
//import { AsideComponent } from '../layouts/components/aside/aside.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { DriversComponent } from './drivers/drivers.component';
import { ClientsComponent } from './clients/clients.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from '../layouts/components/header/header.component';
import { AsideComponent } from '../layouts/components/aside/aside.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { Filtrado2Pipe } from './pipes2/filtrado2.pipe';
import { ClientEditComponent } from './client-edit/client-edit.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    AsideComponent,
    HomeAdminComponent,
    DriversComponent,
    ClientsComponent,
    ProfileComponent,
    FilterPipe,
    Filtrado2Pipe,
    ClientEditComponent   
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class DashboardModule { }
