import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe',
  standalone: true
})
export class MyPipePipe implements PipeTransform {

  transform(value:string): string {
    return `Hello ${value}`;
  }

}
