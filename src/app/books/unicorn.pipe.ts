import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unicorn',
})
export class UnicornPipe implements PipeTransform {
  transform(value: string | number): string {
    console.log('pipe', value);
    return value + ' 🦄';
  }
}
