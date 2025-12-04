/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { JsonPipe, NgIf } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [NgIf, JsonPipe, ReactiveFormsModule],

  // moduleId is NOT needed in Angular CLI.
  selector: 'my-form',
  templateUrl: './my-form.component.html'
})
export class MyFormComponent {
  personGroup = new FormGroup({
    name: new FormControl('Alexandra'),
    age: new FormControl(42)
  });

  submittedData?: object;

  submitted() {
    this.submittedData = this.personGroup.value;
  }
}
