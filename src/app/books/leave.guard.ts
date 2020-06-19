import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';

@Injectable({
  providedIn: 'root',
})
export class LeaveGuard implements CanDeactivate<BookListComponent> {
  canDeactivate(
    component: BookListComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    return confirm('R U SURE?');
  }
}
