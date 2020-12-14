import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from './ibook';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(books: IBook[] = [], search: string = '', key = 'title'): IBook[] {
    return books?.filter((book) => book[key].includes(search));
  }
}
