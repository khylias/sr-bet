import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (control.get('confirmPassword').value === '') {
      return null;
    }

    const passwordsMatch = control.get('password').value === control.get('confirmPassword').value;

    if (!passwordsMatch) {
      control.get('password').setErrors({ ...control.get('password').errors, passwordsDoesntMatch: true });
    }
    return null;
  };
}
