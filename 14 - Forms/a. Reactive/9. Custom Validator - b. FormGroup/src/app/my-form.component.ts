/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, OnInit } from '@angular/core';
import { JsonPipe, NgIf } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { passwordMatchValidator } from './password-match.directive';

@Component({
  imports: [NgIf, JsonPipe, ReactiveFormsModule],

  selector: 'my-form',
  styles: ['span { color: gray }'],
  templateUrl: './my-form.component.html'
})
export class MyFormComponent implements OnInit {
  accountGroup!: FormGroup<{
    user: FormControl<string | null>;
    password1: FormControl<string | null>;
    password2: FormControl<string | null>;
  }>;

  ngOnInit(): void {
    this.accountGroup = new FormGroup(
      {
        user: new FormControl('', [Validators.required]),
        password1: new FormControl('', [Validators.required]),
        password2: new FormControl('', [Validators.required])
      },
      [passwordMatchValidator()]
    );
  }

  submittedData?: Partial<{
    user: string | null;
    password1: string | null;
    password2: string | null;
  }>;

  submitted() {
    this.submittedData = this.accountGroup.value;
  }
}
