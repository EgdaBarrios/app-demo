import { NgSwitchCase } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { ClientsComponent } from '../../clients/clients.component';

@Pipe({
  name: 'pipestatus'
})
export class PipestatusPipe implements PipeTransform {

  transform(value:string): string {
    switch (value) {
      case "A":
        return "Activo";    
      case "I":
        return "Inactivo";
      default: 
        return "Null";
    }
  }

}
