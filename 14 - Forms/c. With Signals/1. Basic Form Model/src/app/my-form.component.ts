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
  `
})
export class MyFormComponent {
  // 1. Create a form model with signal()
  formModel = signal<FormModel>({
    name: 'Angular Form'
  });

  // 2. Pass the form model to form() to create a FieldTree
  myForm = form(this.formModel);
}
