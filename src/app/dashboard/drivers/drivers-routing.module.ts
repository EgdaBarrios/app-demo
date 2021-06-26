import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DriverListComponent } from './driver-list/driver-list.component';
import { DriverEditComponent } from './driver-edit/driver-edit.component';
import { DriversComponent } from './drivers.component';
import { DriverVehicleComponent } from './driver-vehicle/driver-vehicle.component';
import { DriverDocComponent } from './driver-doc/driver-doc.component';
import { DriverInspectionComponent } from './driver-inspection/driver-inspection.component';
import { DriverVisitStateComponent } from './driver-visit-state/driver-visit-state.component';

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
      {
        path: 'driver-vehicle',
        component: DriverVehicleComponent
      },
      {
        path: 'driver-doc',
        component: DriverDocComponent
      },
      {
        path: 'driver-inspection',
        component: DriverInspectionComponent
      },
      {
        path: 'driver-visitState',
        component: DriverVisitStateComponent
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
