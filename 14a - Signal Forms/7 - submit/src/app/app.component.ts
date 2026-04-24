/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, signal } from '@angular/core';
import {
  form,
  FormField,
  required,
  email,
  submit
} from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  imports: [FormField],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginModel = signal({ email: '', password: '' });

  loginForm = form(this.loginModel, path => {
    required(path.email, { message: 'Email is required' });
    email(path.email, { message: 'Enter a valid email address' });
    required(path.password, { message: 'Password is required' });
  });

  submitted = signal<{ email: string; password: string } | null>(null);

  // submit(form, action) marks all fields touched, gates on validity,
  // then awaits the action.
  async onSubmit() {
    await submit(this.loginForm, async f => {
      this.submitted.set(f().value());
    });
  }
}
