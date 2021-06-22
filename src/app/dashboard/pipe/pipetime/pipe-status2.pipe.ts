import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeStatus2'
})
export class PipeStatus2Pipe implements PipeTransform {

  transform(value:string): string {
    switch (value) {
        case "1":
          return "Finalizado";
          case "2":
            return "Cancelado/usurio";
            case "2":
              return "Cancelado/conductor";
      default: 
        return "Null";
    }
  }
}
