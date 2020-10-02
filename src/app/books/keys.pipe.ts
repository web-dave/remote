import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
})
export class KeysPipe implements PipeTransform {
  transform(book: any) {
    console.log('PIPE', book);
    return Math.random();
  }
}
