/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  // moduleId is NOT needed in Angular CLI.
  moduleId: __moduleName /* NOT needed in Angular CLI */,
  selector: 'my-form',
  styles: ['span { color: gray }'],
  templateUrl: './my-form.component.html',

  // Provide FormBuilder
  providers: [FormBuilder]
})
export class MyFormComponent implements OnInit {
  personGroup!: FormGroup;

  // Inject FormBuilder
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // Use FormBuilder
    this.personGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      age: [0, [Validators.min(0)]]
    });
  }

  submittedData?: string;

  submitted() {
    this.submittedData = this.personGroup.value;
  }
}
