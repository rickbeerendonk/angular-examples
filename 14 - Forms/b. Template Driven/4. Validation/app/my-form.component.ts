/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { Component } from '@angular/core';

interface Person {
  age: number;
  name: string;
}

@Component({
  // moduleId is NOT needed in Angular CLI.
  moduleId: __moduleName /* NOT needed in Angular CLI */,
  selector: 'my-form',
  styleUrls: ['./my-form.component.css'],
  templateUrl: './my-form.component.html'
})
export class MyFormComponent {
  private static newModel(): Person {
    return { age: -1, name: '' };
  }

  model = MyFormComponent.newModel();

  submittedData?: object;

  submitted() {
    this.submittedData = this.model;
    this.model = MyFormComponent.newModel();
  }
}
