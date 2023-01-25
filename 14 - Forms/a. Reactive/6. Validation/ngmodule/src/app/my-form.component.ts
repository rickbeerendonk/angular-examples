/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-form',
  styles: ['span { color: gray }'],
  templateUrl: './my-form.component.html'
})
export class MyFormComponent {
  personGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    age: new FormControl(-1, [Validators.min(0)])
  });

  submittedData?: Partial<{ name: string | null; age: number | null }>;

  submitted() {
    this.submittedData = this.personGroup.value;
  }
}
