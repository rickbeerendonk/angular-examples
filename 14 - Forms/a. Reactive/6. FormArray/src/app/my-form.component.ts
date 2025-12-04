/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],

  selector: 'my-form',
  template: `
    <form [formGroup]="personGroup">
      <label>
        Name:
        <input type="text" formControlName="name" />
      </label>
      <br />
      <div formArrayName="nickNames">
        @for (nickName of nickNames.controls; track $index) {
          <label>
            Nickname {{ $index + 1 }}:
            <input [formControlName]="$index" />
          </label>
        }
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
