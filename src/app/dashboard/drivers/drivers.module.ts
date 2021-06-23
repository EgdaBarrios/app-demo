import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverListComponent } from './driver-list/driver-list.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DriversRoutingModule } from './drivers-routing.module';



@NgModule({
  declarations: [
    DriverListComponent
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
