/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-form',
  template: `
    <label>
      Name:
      <input type="text" [formControl]="name" />
    </label>
    <h1>Hello {{ name.value }}</h1>
  `
})
export class MyFormComponent {
  name = new FormControl('Angular Form');
}
