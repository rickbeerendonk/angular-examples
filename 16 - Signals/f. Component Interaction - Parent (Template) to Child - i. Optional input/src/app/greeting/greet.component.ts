/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, input } from '@angular/core';

@Component({
  // Add required property as an attribute to the selector
  selector: 'greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent {
  // Optional property
  //name = input<string>();        // InputSignal<string|undefined>

  // Provide a default value
  name = input<string>('Default'); // InputSignal<string>
}
