import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, flatMap } from 'rxjs/operators';

@Injectable()
export class PreLoad implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    console.log(route);
    if (route.data) {
      return of(true).pipe(
        delay(route.data.delay),
        flatMap((d) => fn())
      );
    } else {
      return fn();
    }
  }
}
