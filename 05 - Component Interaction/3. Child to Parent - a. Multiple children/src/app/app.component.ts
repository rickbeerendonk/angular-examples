/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';
import { GreetingComponent, IChangeEvent } from './greeting/greeting.component';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  imports: [GreetingComponent]
})
export class AppComponent {
  greetingText = signal<string | undefined>(undefined);
  greetingSource = signal<string | undefined>(undefined);

  greetingChanged(eventData: IChangeEvent) {
    this.greetingText.set(eventData.value);
    this.greetingSource.set(eventData.sourceName);
  }
}
