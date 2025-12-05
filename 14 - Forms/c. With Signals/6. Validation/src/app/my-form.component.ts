/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  form,
  Field,
  required,
  email,
  minLength,
  maxLength,
  min,
  max,
  pattern
} from '@angular/forms/signals';

interface RegistrationData {
  username: string;
  email: string;
  password: string;
  age: number;
  website: string;
}

@Component({
  selector: 'my-form',
  imports: [Field],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form>
      <label>
        Username:
        <input type="text" [field]="registrationForm.username" />
        @for (error of registrationForm.username().errors(); track error.kind) {
          <small class="error">{{ error.message }}</small>
        }
      </label>

      <label>
        Email:
        <input type="email" [field]="registrationForm.email" />
        @for (error of registrationForm.email().errors(); track error.kind) {
          <small class="error">{{ error.message }}</small>
        }
      </label>

      <label>
        Password:
        <input type="password" [field]="registrationForm.password" />
        @for (error of registrationForm.password().errors(); track error.kind) {
          <small class="error">{{ error.message }}</small>
        }
      </label>

      <label>
        Age:
        <input type="number" [field]="registrationForm.age" />
        @for (error of registrationForm.age().errors(); track error.kind) {
          <small class="error">{{ error.message }}</small>
        }
      </label>

      <label>
        Website:
        <input type="text" [field]="registrationForm.website" />
        @for (error of registrationForm.website().errors(); track error.kind) {
          <small class="error">{{ error.message }}</small>
        }
      </label>

      <button type="submit">Register</button>
    </form>
  `,
  styles: `
    form {
      display: flex;
      flex-direction: column;
      gap: 1em;
      max-width: 400px;
    }
    label {
      display: flex;
      flex-direction: column;
      gap: 0.25em;
    }
    input {
      padding: 0.5em;
      font-size: 1em;
    }
    .error {
      color: red;
      font-size: 0.8em;
    }
    button {
      padding: 0.5em 1em;
      font-size: 1em;
    }
  `
})
export class MyFormComponent {
  registrationModel = signal<RegistrationData>({
    username: '',
    email: '',
    password: '',
    age: 0,
    website: ''
  });

  // Add validation schema as second argument to form()
  registrationForm = form(this.registrationModel, schemaPath => {
    // required() - Field must have a value
    required(schemaPath.username, { message: 'Username is required' });
    // minLength() / maxLength() - String or array length constraints
    minLength(schemaPath.username, 3, {
      message: 'Username must be at least 3 characters'
    });
    maxLength(schemaPath.username, 20, {
      message: 'Username must be at most 20 characters'
    });

    // email() - Validates email format
    required(schemaPath.email, { message: 'Email is required' });
    email(schemaPath.email, { message: 'Please enter a valid email address' });

    // required() and minLength() for password
    required(schemaPath.password, { message: 'Password is required' });
    minLength(schemaPath.password, 8, {
      message: 'Password must be at least 8 characters'
    });

    // min() / max() - Number range constraints
    required(schemaPath.age, { message: 'Age is required' });
    min(schemaPath.age, 18, { message: 'You must be at least 18 years old' });
    max(schemaPath.age, 120, { message: 'Please enter a valid age' });

    // pattern() - Regex validation
    pattern(schemaPath.website, /^https?:\/\/.+/, {
      message: 'Website must start with http:// or https://'
    });
  });
}
