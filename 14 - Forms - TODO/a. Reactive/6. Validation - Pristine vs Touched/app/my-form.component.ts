/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  // moduleId is NOT needed in Angular CLI.
  moduleId:
    __moduleName /* Use __moduleName in SystemJS and module.id in commonjs */,
  selector: 'my-form',
  styles: ['span { color: red }', 'ul { color: gray }'],
  templateUrl: './my-form.component.html'
})
export class MyFormComponent implements OnInit {
  personForm: FormGroup;

  ngOnInit(): void {
    this.personForm = new FormGroup({
      // Showing errors combined with pristine (name) or touched (country)
      name: new FormControl('', [Validators.minLength(4)]),
      country: new FormControl('', [Validators.minLength(4)])
    });

    /* 
    this.personForm.controls.name.pristine;  // Value isn't changed by the user yet.
    this.personForm.controls.name.dirty;     // Value is changed by the user.
    this.personForm.controls.name.touched;   // User has entered and left the control.
    this.personForm.controls.name.untouched; // User never visited or only entered the control.
    */
  }

  submittedData: string;

  submitted() {
    this.submittedData = this.personForm.value;
  }
}
