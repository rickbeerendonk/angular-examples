/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, signal } from '@angular/core';
import {
  form,
  Field,
  required,
  minLength,
  validate,
  customError
} from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  imports: [Field],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signupModel = signal({ password: '', confirmPassword: '' });

  signupForm = form(this.signupModel, path => {
    required(path.password, { message: 'Password is required' });
    minLength(path.password, 8, { message: 'At least 8 characters' });

    required(path.confirmPassword, { message: 'Please confirm the password' });

    // Cross-field rule: read another field's value via valueOf().
    validate(path.confirmPassword, ({ value, valueOf }) => {
      if (value() !== valueOf(path.password)) {
        return customError({
          kind: 'mismatch',
          message: 'Passwords do not match'
        });
      }
      return null;
    });
  });
}
