import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientEditComponent } from './client-edit/client-edit.component';

import { ClientsComponent } from './clients/clients.component';
import { DashboardComponent } from './dashboard.component';
import { DriversComponent } from './drivers/drivers.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ProfileComponent } from './profile/profile.component';


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
        path: 'drivers',
        component: DriversComponent
      },
      {
        path: 'clients',
        component: ClientsComponent
      },
      {
        path: 'client-edit',
        component: ClientEditComponent
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
