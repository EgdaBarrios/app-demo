import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPlate'
})
export class FilterPlatePipe implements PipeTransform {

  transform(value:any,arg:any):any {
    if (arg === '') return value;
        const resultPosts = [];
        for (const drivers of value) {
          if (drivers.vehicle_plate.indexOf(arg) > -1) {
            resultPosts.push(drivers);
          };
        }
          return resultPosts;
      }
}
