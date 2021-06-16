import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any,arg:any):any {
    if (arg.length < 3) return value;
        let fullname =[];
        const resultPosts2 = [];
        for (const clients of value) {
          fullname=clients.name.concat(' ',clients.middle_name + ' ' + clients.last_name)
          if (fullname.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
            resultPosts2.push(clients);
            console.log("Busqueda Realizada :", resultPosts2);
            console.log("Busqueda Realizada :", fullname);
          };
        }
          return resultPosts2;
      }

}