/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { Component, Input } from '@angular/core';

@Component({
  // Required (Angular 15-)
  selector: 'greet[name]',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent {
  @Input() greeting?: string = 'Hello';

  @Input() name?: string;
}
