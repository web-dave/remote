import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hans',
})
export class HansPipe implements PipeTransform {
  constructor() {}
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(value) {
    console.log('pipe', value);

    return value.toUpperCase();
  }

  add(a, b) {
    return a + b;
  }
}
