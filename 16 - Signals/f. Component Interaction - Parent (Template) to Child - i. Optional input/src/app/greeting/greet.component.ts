/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  // Add required property as an attribute to the selector
  selector: 'greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent {
  // input() signals are better than @Input() properties:
  // See: https://angular.dev/guide/signals/inputs#why-should-we-use-signal-inputs-and-not-input

  // Optional property
  //name = input<string>();        // InputSignal<string|undefined>
  name = input<string>('Default'); // InputSignal<string>
}
