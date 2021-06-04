/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  // moduleId is NOT needed in Angular CLI.
  moduleId:
    __moduleName /* Use __moduleName in SystemJS and module.id in commonjs */,
  selector: 'my-form',
  templateUrl: './my-form.component.html'
})
export class MyFormComponent {
  name = 'Angular Form';

  submittedData: string;

  submitted() {
    this.submittedData = this.name;
  }
}
