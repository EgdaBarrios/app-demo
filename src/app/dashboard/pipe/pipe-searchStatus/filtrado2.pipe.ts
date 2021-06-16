import { Pipe, PipeTransform } from '@angular/core';
import { ActivationEnd } from '@angular/router';

@Pipe({
  name: 'filtrado2'
})
export class Filtrado2Pipe implements PipeTransform {

  transform(value:any,arg:any):any {
    if (arg === '') return value;
        const resultPosts = [];
        for (const clients of value) {
          if (clients.status.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
            resultPosts.push(clients);
            console.log('IF: ',resultPosts);
          };
        }
          return resultPosts;
          console.log('return: ',resultPosts);
      }

}
