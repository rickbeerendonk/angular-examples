/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html'
})
export class GreetingComponent {
  name = input.required<string>();
}
