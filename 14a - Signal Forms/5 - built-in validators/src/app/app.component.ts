/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, signal } from '@angular/core';
import {
  form,
  Field,
  required,
  email,
  minLength,
  pattern
} from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  imports: [Field],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signupModel = signal({ email: '', username: '', password: '' });

  signupForm = form(this.signupModel, path => {
    required(path.email, { message: 'Email is required' });
    email(path.email, { message: 'Enter a valid email address' });

    required(path.username, { message: 'Username is required' });
    pattern(path.username, /^[a-z0-9_]+$/i, {
      message: 'Letters, digits and underscores only'
    });

    required(path.password, { message: 'Password is required' });
    minLength(path.password, 8, { message: 'At least 8 characters' });
  });
}
