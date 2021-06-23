import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DriverListComponent } from './driver-list/driver-list.component';
import { DriverEditComponent } from './driver-edit/driver-edit.component';

const routes: Routes = [
  {
    path: '',
    component: DriverListComponent,
    children: [
      {
        path: 'drivers',
        component: DriverListComponent
      },
      {
        path: 'driver-edit/:id',
        component: DriverEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule { }
