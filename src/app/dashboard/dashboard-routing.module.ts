import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'homeAdmin',
        component: HomeAdminComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'clients',
        loadChildren: () =>
          import('./clients/clients.module').then((m) => m.ClientsModule),
      },
      {
        path: 'drivers',
        loadChildren: () =>
          import('./drivers/drivers.module').then((m) => m.DriversModule),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
