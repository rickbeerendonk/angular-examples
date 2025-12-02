/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { LowerCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'greeting',
  imports: [LowerCasePipe],
  templateUrl: './greeting.component.html'
})
export class GreetingComponent {
  text = signal('Hello Lowercase Pipe');
}
