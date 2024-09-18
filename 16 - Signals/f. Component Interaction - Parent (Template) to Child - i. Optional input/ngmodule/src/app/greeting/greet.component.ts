/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { Component, input } from '@angular/core';

@Component({
  // Add required property as an attribute to the selector
  selector: 'greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent {
  // input() signals are better than @Input() properties:
  // See: https://angular.dev/guide/signals/inputs#why-should-we-use-signal-inputs-and-not-input

  // Optional property
  name = input<string>('Default'); // InputSignal<string|undefined>
}
