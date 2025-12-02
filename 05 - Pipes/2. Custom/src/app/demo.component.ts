/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';

import { CsvPipe } from './csv.pipe';

@Component({
  selector: 'demo',
  imports: [CsvPipe],
  template: `
    <p>{{ text1() | csv }}</p>
    <p>{{ text2() | csv: '-' }}</p>
    <p>{{ text3() | csv: '' : '..' }}</p>
  `,
  standalone: true
})
export class DemoComponent {
  text1 = signal('one,two,three');
  text2 = signal('one-two-three');
  text3 = signal('one,two,three');
}
