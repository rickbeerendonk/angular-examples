/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'values' })
export class ValuesPipe implements PipeTransform {
  transform(value: object): any[] {
    return value ? Object.values(value) : [];
  }
}
