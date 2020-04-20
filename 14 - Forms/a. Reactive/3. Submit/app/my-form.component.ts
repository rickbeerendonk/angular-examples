/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  // moduleId is NOT needed in Angular CLI.
  moduleId: __moduleName /* Use __moduleName in SystemJS and module.id in commonjs */,
  selector: 'my-form',
  templateUrl: './my-form.component.html'
})
export class MyFormComponent {
  personForm = new FormGroup({
    name: new FormControl('Alexandra'),
    age: new FormControl(42)
  });

  submittedData: string;

  submitted() {
    this.submittedData = this.personForm.value;
  }
}
