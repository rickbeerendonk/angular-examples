/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'entries' })
export class EntriesPipe implements PipeTransform {
  transform(value: object): [string, any][] {
    return value ? Object.entries(value) : [];
  }
}
