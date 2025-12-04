/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { JsonPipe, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [NgIf, JsonPipe, FormsModule],

  // moduleId is NOT needed in Angular CLI.
  selector: 'my-form',
  styleUrls: ['./my-form.component.css'],
  templateUrl: './my-form.component.html'
})
export class MyFormComponent {
  model = {
    age: -1,
    name: ''
  };

  submittedData?: object;

  submitted() {
    this.submittedData = this.model;
  }
}
