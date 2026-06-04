/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { form, FormField } from '@angular/forms/signals';

interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'my-form',
  imports: [FormField, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form (submit)="onSubmit($event)">
      <label>
        Email:
        <input type="email" [formField]="loginForm.email" />
      </label>
      <label>
        Password:
        <input type="password" [formField]="loginForm.password" />
      </label>
      <button type="submit">Log In</button>
    </form>
    @if (submitted()) {
      <p>Submitted: {{ loginModel() | json }}</p>
    }
  `,
  styles: `
    form {
      display: flex;
      flex-direction: column;
      gap: 1em;
      max-width: 300px;
    }
  `
})
export class MyFormComponent {
  loginModel = signal<LoginData>({
    email: '',
    password: ''
  });

  loginForm = form(this.loginModel);
  submitted = signal(false);

  onSubmit(event: Event) {
    event.preventDefault();
    // Access the form data from the model signal
    const credentials = this.loginModel();
    console.log('Logging in with:', credentials);
    this.submitted.set(true);
  }
}
