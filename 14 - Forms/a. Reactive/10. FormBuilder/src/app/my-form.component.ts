/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  imports: [JsonPipe, ReactiveFormsModule],
  selector: 'my-form',
  styles: ['span { color: gray }'],
  templateUrl: './my-form.component.html',

  // Provide FormBuilder
  providers: [FormBuilder]
})
export class MyFormComponent implements OnInit {
  private readonly formBuilder = inject(FormBuilder);
  personGroup!: FormGroup;

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
