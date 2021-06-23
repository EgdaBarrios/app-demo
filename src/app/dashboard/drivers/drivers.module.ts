import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverListComponent } from './driver-list/driver-list.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DriversRoutingModule } from './drivers-routing.module';
import { DriverEditComponent } from './driver-edit/driver-edit.component';



@NgModule({
  declarations: [
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
