/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { prefixValidator } from './prefix.directive';

@Component({
  // moduleId is NOT needed in Angular CLI.
  moduleId: __moduleName /* NOT needed in Angular CLI */,
  selector: 'my-form',
  styles: ['span { color: gray }'],
  templateUrl: './my-form.component.html'
})
export class MyFormComponent implements OnInit {
  personGroup!: FormGroup;

  ngOnInit(): void {
    this.personGroup = new FormGroup({
      name: new FormControl('', [prefixValidator('Ang')]),
      age: new FormControl(0)
    });
  }

  submittedData?: string;

  submitted() {
    this.submittedData = this.personGroup.value;
  }
}
