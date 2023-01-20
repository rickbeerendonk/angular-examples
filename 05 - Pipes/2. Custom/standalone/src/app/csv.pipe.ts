/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'csv', standalone: true })
export class CsvPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    if (!value) {
      return value;
    }

    const searchValue = args[0] || ',';
    const replaceValue = args[1] || ' ';
    return value.split(searchValue).join(replaceValue);
  }
}
