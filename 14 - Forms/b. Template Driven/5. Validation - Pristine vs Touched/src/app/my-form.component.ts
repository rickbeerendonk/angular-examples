/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [JsonPipe, FormsModule],
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
