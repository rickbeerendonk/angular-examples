/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'my-form',
  imports: [ReactiveFormsModule],
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
