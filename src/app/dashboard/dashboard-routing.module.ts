import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientsComponent } from './clients/clients.component';
import { DashboardComponent } from './dashboard.component';
import { DriversComponent } from './drivers/drivers.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientEditComponent } from './client-edit/client-edit.component';

import { ClientListComponent } from './client-list/client-list.component';
import { ClientDataEditComponent } from './client-data-edit/client-data-edit.component';

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
      // Path 1
      {
        path: 'clients',
        component: ClientsComponent
      },
      {
        path: 'client-edit',
        component: ClientEditComponent
      },
      // Path 2
      {
        path: 'client-list',
        component: ClientListComponent
      },
      {
        path: 'client-dataEdit',
        component: ClientDataEditComponent
      },  
      //---------    
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
