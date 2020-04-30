import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { delay, flatMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PreloadDelayed implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    console.log(route);
    if (route.data.preload) {
      return of(1).pipe(
        delay(route.data.delay),
        flatMap(() => fn())
      );
    }
    return fn();
  }
}
