/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'my-form',
  template: `
    <form #myForm="ngForm">
      <label>
        Name:
        <input type="text" [(ngModel)]="name" name="name" />
      </label>
    </form>
    <button (click)="myForm.reset()">Reset</button>
  `
})
export class MyFormComponent {
  name = 'Angular Form';
}
