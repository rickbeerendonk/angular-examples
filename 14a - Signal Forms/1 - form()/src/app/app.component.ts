/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  imports: [FormField],
  templateUrl: './app.component.html'
})
export class AppComponent {
  // 1. Model is a plain signal of the data shape.
  loginModel = signal({ email: '', password: '' });

  // 2. form(modelSignal) returns a field tree mirroring the model.
  loginForm = form(this.loginModel);
}
