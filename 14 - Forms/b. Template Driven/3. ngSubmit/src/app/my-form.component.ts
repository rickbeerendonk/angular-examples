/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';

@Component({
  standalone: true,
  // moduleId is NOT needed in Angular CLI.
  selector: 'my-form',
  templateUrl: './my-form.component.html'
})
export class MyFormComponent {
  name = signal('Angular Form');

  submittedData?: string;

  submitted() {
    this.submittedData = this.name;
  }
}
