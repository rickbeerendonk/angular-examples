/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, signal } from '@angular/core';
import { form, Field, required } from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  imports: [Field],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginModel = signal({ email: '', password: '' });

  loginForm = form(this.loginModel, path => {
    required(path.email, { message: 'Email is required' });
    required(path.password, { message: 'Password is required' });
  });
}
