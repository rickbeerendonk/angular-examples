/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { IChangeEvent } from './greeting/greeting.component';

@Component({
  standalone: true,
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  greetingText?: string;
  greetingSource?: string;

  greetingChanged(eventData: IChangeEvent) {
    this.greetingText = eventData.value;
    this.greetingSource = eventData.sourceName;
  }
}
