/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { prefixValidator } from './prefix.directive';

@Component({
  standalone: true,
  // moduleId is NOT needed in Angular CLI.
  selector: 'my-form',
  styles: ['span { color: gray }'],
  templateUrl: './my-form.component.html'
})
export class MyFormComponent implements OnInit {
  personGroup!: FormGroup<{
    name: FormControl<string | null>;
    age: FormControl<number | null>;
  }>;

  ngOnInit(): void {
    this.personGroup = new FormGroup({
      name: new FormControl('', /* sync */ [], /* async */ [prefixValidator()]),
      age: new FormControl(0)
    });
  }

  submittedData?: Partial<{ name: string | null; age: number | null }>;

  submitted() {
    this.submittedData = this.personGroup.value;
  }
}
