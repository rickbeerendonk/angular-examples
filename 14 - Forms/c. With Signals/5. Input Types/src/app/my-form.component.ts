/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { form, Field } from '@angular/forms/signals';

interface FormModel {
  name: string;
  email: string;
  age: number;
  eventDate: string;
  eventTime: string;
  message: string;
  agreeToTerms: boolean;
  emailNotifications: boolean;
  smsNotifications: boolean;
  plan: string;
  country: string;
}

@Component({
  selector: 'my-form',
  imports: [Field, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <fieldset>
      <legend>Text Inputs</legend>
      <label>
        Name (text):
        <input type="text" [field]="myForm.name" />
      </label>
      <label>
        Email:
        <input type="email" [field]="myForm.email" />
      </label>
      <label>
        Age (number):
        <input type="number" [field]="myForm.age" />
      </label>
    </fieldset>

    <fieldset>
      <legend>Date and Time</legend>
      <label>
        Event Date:
        <input type="date" [field]="myForm.eventDate" />
      </label>
      <label>
        Event Time:
        <input type="time" [field]="myForm.eventTime" />
      </label>
    </fieldset>

    <fieldset>
      <legend>Textarea</legend>
      <label>
        Message:
        <textarea [field]="myForm.message" rows="4"></textarea>
      </label>
    </fieldset>

    <fieldset>
      <legend>Checkboxes</legend>
      <label>
        <input type="checkbox" [field]="myForm.agreeToTerms" />
        I agree to the terms
      </label>
      <label>
        <input type="checkbox" [field]="myForm.emailNotifications" />
        Email notifications
      </label>
      <label>
        <input type="checkbox" [field]="myForm.smsNotifications" />
        SMS notifications
      </label>
    </fieldset>

    <fieldset>
      <legend>Radio Buttons</legend>
      <label>
        <input type="radio" value="free" [field]="myForm.plan" />
        Free
      </label>
      <label>
        <input type="radio" value="premium" [field]="myForm.plan" />
        Premium
      </label>
      <label>
        <input type="radio" value="enterprise" [field]="myForm.plan" />
        Enterprise
      </label>
    </fieldset>

    <fieldset>
      <legend>Select Dropdown</legend>
      <label>
        Country:
        <select [field]="myForm.country">
          <option value="">Select a country</option>
          <option value="dk">Denmark</option>
          <option value="nl">Netherlands</option>
          <option value="no">Norway</option>
        </select>
      </label>
    </fieldset>

    <details>
      <summary>Form Data (click to expand)</summary>
      <pre>{{ formModel() | json }}</pre>
    </details>
  `,
  styles: `
    fieldset {
      margin-bottom: 1em;
      padding: 1em;
    }
    label {
      display: block;
      margin-bottom: 0.5em;
    }
    input[type='text'],
    input[type='email'],
    input[type='number'],
    input[type='date'],
    input[type='time'],
    textarea,
    select {
      display: block;
      width: 100%;
      max-width: 300px;
      margin-top: 0.25em;
    }
    details {
      margin-top: 1em;
    }
    pre {
      background: #f5f5f5;
      padding: 1em;
      border-radius: 4px;
    }
  `
})
export class MyFormComponent {
  formModel = signal<FormModel>({
    name: 'Jan Janssen',
    email: 'jan@example.com',
    age: 25,
    eventDate: '2025-01-15',
    eventTime: '14:30',
    message: 'This is a sample message.',
    agreeToTerms: false,
    emailNotifications: true,
    smsNotifications: false,
    plan: 'free',
    country: 'nl'
  });

  myForm = form(this.formModel);
}
