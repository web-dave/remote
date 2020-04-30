import { AbstractControl, ValidationErrors } from '@angular/forms';

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
