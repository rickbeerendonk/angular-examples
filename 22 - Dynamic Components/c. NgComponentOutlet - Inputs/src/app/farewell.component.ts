/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, input } from '@angular/core';

@Component({
  selector: 'app-farewell',
  templateUrl: './farewell.component.html'
})
export class FarewellComponent {
  name = input.required<string>();
}
