import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientListComponent } from './client-list/client-list.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientTravelsComponent } from './client-travels/client-travels.component';
import { PipeModule } from '../pipe/pipe.module';
import { PipeStatus2Pipe } from '../pipe/pipetime/pipe-status2.pipe';
import { FilterPipe } from '../pipe/pipe-search/filter.pipe';
import { Filtrado2Pipe } from '../pipe/pipe-searchStatus/filtrado2.pipe';
import { PipestatusPipe } from '../pipe/pipeStatus/pipestatus.pipe';


@NgModule({
  declarations: [
    ClientListComponent,
    ClientEditComponent,
    ClientTravelsComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule
  ]
  
})
export class ClientsModule { }
