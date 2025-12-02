/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [JsonPipe],

  selector: 'demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent {
  person = {
    name: 'Jan Jansen',
    dob: new Date(1951, 11, 24),
    retired: true,
    children: 3
  };
}
