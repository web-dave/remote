import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { BookDetailsComponent } from './books/book-details/book-details.component';

@Injectable({
  providedIn: 'root',
})
export class LeaveGuard implements CanDeactivate<BookDetailsComponent> {
  canDeactivate(
    component: BookDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    console.log(component, currentRoute, currentState, nextState);
    return confirm('R U SURE?');
  }
}
