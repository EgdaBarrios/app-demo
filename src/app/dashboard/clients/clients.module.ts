import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientListComponent } from './client-list/client-list.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientTravelsComponent } from './client-travels/client-travels.component';

@NgModule({
  declarations: [
    ClientListComponent,
    ClientEditComponent,
    ClientTravelsComponent,
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
