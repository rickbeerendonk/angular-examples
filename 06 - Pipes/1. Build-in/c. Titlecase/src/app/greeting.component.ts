/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { TitleCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'greeting',
  imports: [TitleCasePipe],
  templateUrl: './greeting.component.html'
})
export class GreetingComponent {
  text = signal('Hello titlecase PIPE');
}
