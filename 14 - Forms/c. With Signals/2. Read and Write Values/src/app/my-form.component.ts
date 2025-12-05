/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { form, Field } from '@angular/forms/signals';

interface FormModel {
  name: string;
}

@Component({
  selector: 'my-form',
  imports: [Field],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <label>
      Name:
      <input type="text" [field]="myForm.name" />
    </label>
    <p>
      <!-- 4. Read field values with value() -->
      Current value: {{ myForm.name().value() }}
    </p>
    <button (click)="updateName()">Set to 'New Name'</button>
    <button (click)="clearName()">Clear</button>
  `
})
export class MyFormComponent {
  formModel = signal<FormModel>({
    name: 'Angular Form'
  });

  myForm = form(this.formModel);

  // 5. Update field values with set()
  updateName() {
    this.myForm.name().value.set('New Name');
  }

  clearName() {
    this.myForm.name().value.set('');
  }
}
