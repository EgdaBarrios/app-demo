import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DriverListComponent } from './driver-list/driver-list.component';
import { DriverEditComponent } from './driver-edit/driver-edit.component';
import { DriversComponent } from './drivers.component';

const routes: Routes = [
  {
    path: '',
    component: DriversComponent,
    children: [
      {
        path: 'driver-list',
        component: DriverListComponent
      },
      {
        path: 'driver-edit',
        component: DriverEditComponent
      },
      { path: '', redirectTo: 'driver-list', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule { }
