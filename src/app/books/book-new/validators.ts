import { AbstractControl, ValidationErrors } from '@angular/forms';

export function isbnValidator(
  control: AbstractControl
): ValidationErrors | null {
  console.log(control.value);
  // tslint:disable-next-line:max-line-length
  const pattern =
    '^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$';
  if (control.value && !control.value.match(pattern)) {
    return { isbn: true, msg: 'Sieht doof aus' };
  }
  return null;
}
