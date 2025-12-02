/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const password = formGroup.get('password1')?.value;
    const confirmPassword = formGroup.get('password2')?.value;

    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }

    return null;
  };
}
