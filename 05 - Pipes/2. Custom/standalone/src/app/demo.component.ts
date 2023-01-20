/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { CsvPipe } from './csv.pipe';

@Component({
  selector: 'demo',
  standalone: true,
  imports: [CsvPipe],
  template: `
    <p>{{ 'one,two,three' | csv }}</p>
    <p>{{ 'one-two-three' | csv: '-' }}</p>
    <p>{{ 'one,two,three' | csv: '':'..' }}</p>
  `
})
export class DemoComponent {}
