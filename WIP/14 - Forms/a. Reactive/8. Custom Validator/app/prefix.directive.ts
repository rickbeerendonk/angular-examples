/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function prefixValidator(prefix: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const hasPrefix = Boolean(control.value?.startsWith(prefix));
    return hasPrefix
      ? null
      : { prefix: { required: prefix, value: control.value } };
  };
}
