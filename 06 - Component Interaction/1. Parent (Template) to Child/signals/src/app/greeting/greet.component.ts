/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, input } from '@angular/core';

@Component({
  selector: 'greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css'],
  standalone: true
})
export class GreetComponent {
  name = input('Default');
}
