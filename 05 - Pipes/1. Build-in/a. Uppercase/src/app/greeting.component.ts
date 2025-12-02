/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'greeting',
  imports: [UpperCasePipe],
  templateUrl: './greeting.component.html',
  standalone: true
})
export class GreetingComponent {
  text = signal('Hello Uppercase Pipe');
}
