import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { BookListComponent } from './book-list/book-list.component';

@Injectable({
  providedIn: 'root',
})
export class StayGuard implements CanDeactivate<BookListComponent> {
  canDeactivate(
    component: BookListComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log(component, currentRoute, currentState, nextState);
    return !confirm('Noooooooo! Please stay');
  }
}
