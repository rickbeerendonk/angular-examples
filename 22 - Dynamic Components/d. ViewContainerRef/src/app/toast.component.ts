/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html'
})
export class ToastComponent {
  message = input.required<string>();
  close = output<void>();
}
