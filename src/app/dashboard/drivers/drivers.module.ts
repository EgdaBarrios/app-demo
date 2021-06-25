import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DriversRoutingModule } from './drivers-routing.module';

import { DriverListComponent } from './driver-list/driver-list.component';
import { DriverEditComponent } from './driver-edit/driver-edit.component';
import { DriversComponent } from './drivers.component';


@NgModule({
  declarations: [
    DriversComponent,
    DriverListComponent,
    DriverEditComponent
  ],
  imports: [
    CommonModule,
    DriversRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DriversModule { }
