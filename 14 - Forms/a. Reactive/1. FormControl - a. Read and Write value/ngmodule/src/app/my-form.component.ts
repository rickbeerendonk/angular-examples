/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-form',
  template: `
    <label>
      Name:
      <input type="text" [formControl]="name" />
    </label>
    <h1>Hello {{ name.value }}</h1>
    <button (click)="changeNameToWorld()">Change name...</button>
  `
})
export class MyFormComponent {
  name = new FormControl('Angular Form');

  changeNameToWorld() {
    this.name.setValue(this.name.value + '.');
    console.log(`New name: ${this.name.getRawValue()}`);
  }
}
