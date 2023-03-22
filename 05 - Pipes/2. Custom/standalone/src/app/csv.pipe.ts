/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'csv', standalone: true })
export class CsvPipe implements PipeTransform {
  transform(
    value: string,
    oldSeparator: string = ',',
    newSeparator: string = ' '
  ): string {
    if (!value) {
      return value;
    }

    // if oldSeparator is '', it should become a ','
    oldSeparator = oldSeparator || ',';

    return value.split(oldSeparator).join(newSeparator);
  }
}
