/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  // moduleId is NOT needed in Angular CLI.
  moduleId: __moduleName /* NOT needed in Angular CLI */,
  selector: 'my-form',
  templateUrl: './my-form.component.html'
})
export class MyFormComponent {
  personGroup = new FormGroup({
    name: new FormGroup({
      firstName: new FormControl('Alexandra'),
      lastName: new FormControl('Alba')
    }),
    age: new FormControl(42)
  });
}
