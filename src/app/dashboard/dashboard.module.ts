import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientsComponent } from './clients/clients.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from '../layouts/components/header/header.component';
import { AsideComponent } from '../layouts/components/aside/aside.component';
/*
import { FilterPipe } from './pipe/pipe-search/filter.pipe';
import { Filtrado2Pipe } from './pipe/pipe-searchStatus/filtrado2.pipe';
import { PipestatusPipe } from './pipe/pipeStatus/pipestatus.pipe';
import { PipeStatus2Pipe } from './pipe/pipetime/pipe-status2.pipe';
*/


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    AsideComponent,
    HomeAdminComponent,
    ClientsComponent,
    ProfileComponent,/*
    FilterPipe,
    Filtrado2Pipe,
    PipestatusPipe,
    PipeStatus2Pipe*/
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FilterPipe,
    Filtrado2Pipe,
    PipestatusPipe,
    PipeStatus2Pipe 
  ]
})
export class DashboardModule { }
