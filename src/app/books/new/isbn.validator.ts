import {
  AbstractControl,
  ValidationErrors,
  AsyncValidatorFn,
} from '@angular/forms';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';

export function IsbnValidator(
  control: AbstractControl
): ValidationErrors | null {
  const isbnRegex =
    // tslint:disable-next-line:max-line-length
    '^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$';
  if (!control.value.match(isbnRegex)) {
    return {
      isbn: {
        msg: 'Keine valide ISBN',
      },
    };
  }
  return null;
}

export function IsbnAsyncValidator(
  control: AbstractControl
): Observable<ValidationErrors | null> {
  const check$ = new Subject<ValidationErrors | null>();
  const isbnRegex =
    // tslint:disable-next-line:max-line-length
    '^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$';
  console.log('validate', control.value, control.value.match(isbnRegex));
  if (!control.value.match(isbnRegex)) {
    check$.next({
      isbn: {
        msg: 'Keine valide ISBN',
      },
    });
  } else {
    check$.next(null);
  }
  const ret = check$.pipe(first());
  return ret;
}
