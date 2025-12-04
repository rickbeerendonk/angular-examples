/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { JsonPipe, NgIf } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  imports: [NgIf, JsonPipe, ReactiveFormsModule],

  selector: 'my-form',
  styles: ['span { color: gray }'],
  templateUrl: './my-form.component.html'
})
export class MyFormComponent {
  personGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    age: new FormControl(-1, [Validators.min(0)])
  });

  submittedData?: { name?: string | null; age?: number | null };

  submitted() {
    //this.personGroup.valid
    this.submittedData = this.personGroup.value;
  }
}
