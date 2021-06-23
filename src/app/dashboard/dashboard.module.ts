import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
//import { HeaderComponent } from '../layouts/components/header/header.component';
//import { AsideComponent } from '../layouts/components/aside/aside.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from '../layouts/components/header/header.component';
import { AsideComponent } from '../layouts/components/aside/aside.component';
import { FilterPipe } from './pipe/pipe-search/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Filtrado2Pipe } from './pipe/pipe-searchStatus/filtrado2.pipe';
import { PipestatusPipe } from './pipe/pipeStatus/pipestatus.pipe';
import { PipeStatus2Pipe } from './pipe/pipetime/pipe-status2.pipe';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { DriverListComponent } from './drivers/driver-list/driver-list.component';



@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    AsideComponent,
    HomeAdminComponent,
    ClientListComponent,
    DriverListComponent,
    ProfileComponent,
    FilterPipe,
    Filtrado2Pipe,
    PipestatusPipe,
    PipeStatus2Pipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule    
  ]
})
export class DashboardModule { }
