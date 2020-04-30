import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanDeactivate,
} from '@angular/router';
import { NewComponent } from './new/new.component';

@Injectable({
  providedIn: 'root',
})
export class LeaveGuard implements CanDeactivate<NewComponent> {
  canDeactivate(
    component: NewComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    console.log(component, currentRoute, currentState, nextState);
    if (!component.isSaved()) {
      if (!window.confirm('Verlassen ohne zu speichern?')) {
        return false;
      } else {
        return true;
      }
    }
    return true;
  }
}
