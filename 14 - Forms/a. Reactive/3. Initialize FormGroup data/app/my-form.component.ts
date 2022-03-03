/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-form',
  template: `
    <form [formGroup]="personForm">
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
  personForm = new FormGroup({
    name: new FormControl('Alexandra'),
    age: new FormControl(42)
  });

  constructor() {
    // Initialize the form with data (f.e. through a HTTP request)
    this.personForm.setValue({ name: 'Rick', age: 49 });
  }
}
