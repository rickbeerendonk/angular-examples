/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

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

  constructor() {
    // Initialize the form with data (f.e. through a HTTP request)
    this.personGroup.setValue({ name: 'Rick', age: 50 });
  }
}
