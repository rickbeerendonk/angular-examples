/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import {
  AbstractControl,
  ValidationErrors,
  AsyncValidatorFn
} from '@angular/forms';

export function prefixValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> => {
    return new Promise(resolve => {
      setTimeout(() => {
        // Imagine this is an asynchronous HTTP request.
        const validPrefixes = ['Ang', 'Bla'];

        const hasPrefix = validPrefixes.some(prefix =>
          control.value?.startsWith(prefix)
        );
        resolve(
          hasPrefix
            ? null
            : { prefix: { required: validPrefixes, value: control.value } }
        );
      }, 1000); // Simulate network delay
    });
  };
}
