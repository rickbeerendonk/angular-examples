/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-form',
  template: `
    <form [formGroup]="personGroup">
      <label>
        Name:
        <input type="text" formControlName="name" />
      </label>
      <br />
      <label>
        Age:
        <input type="number" formControlName="age" />
      </label>
    </form>
  `
})
export class MyFormComponent {
  personGroup = new FormGroup({
    name: new FormControl('Alexandra'),
    age: new FormControl(42)
  });
}
