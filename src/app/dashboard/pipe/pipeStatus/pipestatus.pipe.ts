import { NgSwitchCase } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { ClientListComponent } from '../../clients/client-list/client-list.component';

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
        case "1":
          return "Masculino";
          case "2":
            return "Femenino";
      default: 
        return "Null";
    }
  }

}
