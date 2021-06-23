import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ProfileComponent } from './profile/profile.component';
import { DriverListComponent } from './drivers/driver-list/driver-list.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'homeAdmin',
        component: HomeAdminComponent
      },
      {
        path: 'clients',
        component: ClientListComponent
      }, 
      {
        path: 'drivers',
        component: DriverListComponent
      }, 
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
