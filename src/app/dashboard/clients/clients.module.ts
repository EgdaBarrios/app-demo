import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientTravelsComponent } from './client-travels/client-travels.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../pipe/pipe-search/filter.pipe';
import { Filtrado2Pipe } from '../pipe/pipe-searchStatus/filtrado2.pipe';
import { PipestatusPipe } from '../pipe/pipeStatus/pipestatus.pipe';
import { PipeStatus2Pipe } from '../pipe/pipetime/pipe-status2.pipe';



@NgModule({
  declarations: [
    ClientListComponent,
    ClientEditComponent,
    ClientTravelsComponent,
    FilterPipe,
    Filtrado2Pipe,
    PipestatusPipe,
    PipeStatus2Pipe
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
