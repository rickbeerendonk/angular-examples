/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  imports: [FormField],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginModel = signal({ email: '', password: '' });

  loginForm = form(this.loginModel);
}
