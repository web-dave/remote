import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pages',
})
export class PagesPipe implements PipeTransform {
  transform(value: number, prefix: string = 'Seitenzahl'): string {
    console.log('Pipe', value);
    return `${prefix}: ${value}`;
  }
}

// Memoized
