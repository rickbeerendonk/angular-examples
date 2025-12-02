/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'my-form',
  template: `
    <label>
      Name:
      <input type="text" [formControl]="name" />
    </label>
  `
})
export class MyFormComponent {
  name = new FormControl('Angular Form');
}
