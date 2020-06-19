export function isbnAsyncValidator(): AsyncValidatorFn {
  return (
    control: AbstractControl
  ):
    | Observable<ValidationErrors | null>
    | Observable<ValidationErrors | null> => {
    return firebase(control.value).pipe(
      map((v) => console.log('-->', v)),
      map((valid) =>
        valid !== null ? getErrorMsg(control.value.length) : null
      )
    );
  };
}

const isbnRegex =
  '^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$';
export function isbnValidator(control: AbstractControl) {
  const value = String(control.value);
  if (!value.match(isbnRegex) && value.length !== 0) {
    return getErrorMsg(value.length);
  }
  return null;
}
