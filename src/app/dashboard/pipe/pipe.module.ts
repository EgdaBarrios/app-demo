import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipe-search/filter.pipe';
import { PipestatusPipe } from './pipeStatus/pipestatus.pipe';
import { Filtrado2Pipe } from './pipe-searchStatus/filtrado2.pipe';
import { PipeStatus2Pipe } from './pipetime/pipe-status2.pipe';
import { FilterPlatePipe } from './FilterVehiclePlate/filter-plate.pipe';



@NgModule({
  declarations: [
    FilterPipe,
    Filtrado2Pipe,
    PipestatusPipe,
    PipeStatus2Pipe,
    FilterPlatePipe
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    FilterPipe,
    Filtrado2Pipe,
    PipestatusPipe,
    PipeStatus2Pipe,
    FilterPlatePipe
  ]
})
export class PipeModule { }
