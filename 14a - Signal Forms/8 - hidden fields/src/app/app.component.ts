/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, signal } from '@angular/core';
import { form, FormField, required, hidden } from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  imports: [FormField],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shippingModel = signal({
    sameAsBilling: true,
    shippingAddress: ''
  });

  shippingForm = form(this.shippingModel, path => {
    // hidden() takes a predicate over the form value.
    // A hidden field skips validation and is removed from the DOM.
    hidden(path.shippingAddress, ({ valueOf }) => valueOf(path.sameAsBilling));

    required(path.shippingAddress, {
      message: 'Shipping address is required'
    });
  });
}
