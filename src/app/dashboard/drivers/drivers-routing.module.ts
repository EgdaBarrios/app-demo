import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DriverListComponent } from './driver-list/driver-list.component';

const routes: Routes = [
  {
    path: '',
    component: DriverListComponent,
    children: [
      {
        path: 'drivers',
        component: DriverListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule { }
