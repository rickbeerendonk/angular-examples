/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'greeting',
  imports: [UpperCasePipe],
  templateUrl: './greeting.component.html'
})
export class GreetingComponent {
  text = signal('Hello Uppercase Pipe');
}
