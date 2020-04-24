import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { BookDetailsComponent } from './book-details/book-details.component';

@Injectable({
  providedIn: 'root',
})
export class StayGuard implements CanDeactivate<BookDetailsComponent> {
  canDeactivate(
    component: BookDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    return confirm('Oh, NOOOOOOOOOOO! R U SURE?');
  }
}
