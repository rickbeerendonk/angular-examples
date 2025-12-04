/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],

  selector: 'my-form',
  template: `
    <form #myForm="ngForm">
      <label>
        Name:
        <input type="text" [(ngModel)]="name" name="name" />
      </label>
      <button (click)="myForm.reset()">Reset</button>
    </form>
  `
})
export class MyFormComponent {
  name = signal('Angular Form');
}
