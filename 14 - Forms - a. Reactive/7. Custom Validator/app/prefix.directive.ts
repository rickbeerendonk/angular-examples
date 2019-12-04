/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { AbstractControl, ValidatorFn } from '@angular/forms';

export function prefixValidator(prefix: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const hasPrefix =
      control.value.startsWith && control.value.startsWith(prefix);
    return hasPrefix
      ? null
      : { prefix: { required: prefix, value: control.value } };
  };
}
