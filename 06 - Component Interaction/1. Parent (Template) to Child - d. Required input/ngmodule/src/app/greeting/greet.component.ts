/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { Component, Input } from '@angular/core';

@Component({
  selector: 'greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent {
  @Input() greeting?: string = 'Hello';

  // Required (Angular 16+)
  @Input({ required: true }) name?: string;
}
