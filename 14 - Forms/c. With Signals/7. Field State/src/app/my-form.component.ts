/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { form, Field, required, email } from '@angular/forms/signals';

interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'my-form',
  imports: [Field],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form>
      <label>
        Email:
        <input type="email" [field]="loginForm.email" />
      </label>

      <label>
        Password:
        <input type="password" [field]="loginForm.password" />
      </label>
    </form>

    <div class="state-info">
      <h3>Email Field State Signals:</h3>
      <ul>
        <li><strong>value():</strong> "{{ loginForm.email().value() }}"</li>
        <li>
          <strong>valid():</strong> {{ loginForm.email().valid() }}
          <span class="note">(true if field passes all validation)</span>
        </li>
        <li>
          <strong>touched():</strong> {{ loginForm.email().touched() }}
          <span class="note">(true if user focused and blurred the field)</span>
        </li>
        <li>
          <strong>dirty():</strong> {{ loginForm.email().dirty() }}
          <span class="note">(true if user changed the value)</span>
        </li>
        <li>
          <strong>disabled():</strong> {{ loginForm.email().disabled() }}
          <span class="note">(true if field is disabled)</span>
        </li>
        <li>
          <strong>readonly():</strong> {{ loginForm.email().readonly() }}
          <span class="note">(true if field is readonly)</span>
        </li>
        <li>
          <strong>pending():</strong> {{ loginForm.email().pending() }}
          <span class="note">(true if async validation is in progress)</span>
        </li>
        <li>
          <strong>errors():</strong>
          @if (loginForm.email().errors().length > 0) {
            <ul>
              @for (error of loginForm.email().errors(); track error.kind) {
                <li class="error">{{ error.kind }}: {{ error.message }}</li>
              }
            </ul>
          } @else {
            No errors
          }
        </li>
      </ul>
    </div>
  `,
  styles: `
    form {
      display: flex;
      flex-direction: column;
      gap: 1em;
      max-width: 400px;
      margin-bottom: 2em;
      padding: 1em;
      border: 1px solid #ccc;
      border-radius: 4px;
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
    .state-info {
      padding: 1em;
      background: #f5f5f5;
      border-radius: 4px;
    }
    .state-info h3 {
      margin-top: 0;
    }
    .state-info ul {
      list-style: none;
      padding-left: 0;
    }
    .state-info li {
      margin-bottom: 0.5em;
    }
    .note {
      font-size: 0.8em;
      color: #666;
      font-style: italic;
    }
    .error {
      color: red;
    }
  `
})
export class MyFormComponent {
  loginModel = signal<LoginData>({
    email: '',
    password: ''
  });

  loginForm = form(this.loginModel, schemaPath => {
    required(schemaPath.email, { message: 'Email is required' });
    email(schemaPath.email, { message: 'Enter a valid email address' });
    required(schemaPath.password, { message: 'Password is required' });
  });
}
