/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { form, Field } from '@angular/forms/signals';

interface FormModel {
  name: string;
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
}

@Component({
  selector: 'my-form',
  imports: [Field, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <fieldset>
      <legend>Personal Information</legend>
      <label>
        Name:
        <input type="text" [field]="myForm.name" />
      </label>
    </fieldset>

    <fieldset>
      <legend>Address</legend>
      <!-- Access nested fields with dot notation -->
      <label>
        Street:
        <input type="text" [field]="myForm.address.street" />
      </label>
      <label>
        City:
        <input type="text" [field]="myForm.address.city" />
      </label>
      <label>
        Zip Code:
        <input type="text" [field]="myForm.address.zipCode" />
      </label>
    </fieldset>

    <p>Form data: {{ formModel() | json }}</p>
  `,
  styles: `
    fieldset {
      margin-bottom: 1em;
    }
    label {
      display: block;
      margin-bottom: 0.5em;
    }
  `
})
export class MyFormComponent {
  formModel = signal<FormModel>({
    name: 'Jan Janssen',
    address: {
      street: 'Dorpsstraat 1',
      city: 'Ons Dorp ',
      zipCode: '1234 AB'
    }
  });

  myForm = form(this.formModel);
}
