import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DriversRoutingModule } from './drivers-routing.module';

import { DriverListComponent } from './driver-list/driver-list.component';
import { DriverEditComponent } from './driver-edit/driver-edit.component';
import { DriversComponent } from './drivers.component';
import { DriverVehicleComponent } from './driver-vehicle/driver-vehicle.component';
import { DriverDocComponent } from './driver-doc/driver-doc.component';
import { DriverInspectionComponent } from './driver-inspection/driver-inspection.component';
import { DriverVisitStateComponent } from './driver-visit-state/driver-visit-state.component';
import { PipeModule } from '../pipe/pipe.module';


@NgModule({
  declarations: [
    DriversComponent,
    DriverListComponent,
    DriverEditComponent,
    DriverVehicleComponent,
    DriverDocComponent,
    DriverInspectionComponent,
    DriverVisitStateComponent
  ],
  imports: [
    CommonModule,
    DriversRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule
  ]
})
export class DriversModule { }
