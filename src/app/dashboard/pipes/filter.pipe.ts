import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any,arg:any):any {
    if (arg === '' || arg.length < 3) return value;
    const resultPosts = [];
    for (const clients of value) {
      if (clients.phone_number.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(clients);
      };
      if (clients.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(clients);
      };
      if (clients.last_name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(clients);
      };
      if (clients.middle_name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(clients);
      };
    };
    return resultPosts;
  }
}
