/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-form',
  template: `
    <form [formGroup]="personGroup">
      <label>
        Name:
        <input type="text" formControlName="name" />
      </label>
      <br />
      <div formArrayName="nickNames">
        <label *ngFor="let nickName of nickNames.controls; let i = index">
          Nickname {{ i + 1 }}:
          <input [formControlName]="i" />
        </label>
      </div>
      <button (click)="addNickName()">Add Nickname</button>
    </form>
  `
})
export class MyFormComponent {
  personGroup = new FormGroup({
    name: new FormControl('Alexandra'),
    nickNames: new FormArray([])
  });

  get nickNames() {
    return this.personGroup.get('nickNames') as FormArray;
  }

  addNickName() {
    this.nickNames.push(new FormControl(''));
  }
}
