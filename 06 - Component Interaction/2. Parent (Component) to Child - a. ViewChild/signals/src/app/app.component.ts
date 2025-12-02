/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, viewChild, effect } from '@angular/core';
import { GreetingComponent } from './greeting/greeting.component';

@Component({
  selector: 'app',
  template: `
    <greeting />
    <br />
    <button (click)="addPoint()">Add point</button>
  `,
  standalone: true,
  imports: [GreetingComponent],
})
export class AppComponent {
  // Query first GreetingComponent in the template using viewChild signal
  private greetingComponent = viewChild.required(GreetingComponent);

  constructor() {
    // Use effect to set initial value after component is available
    effect(() => {
      const greeting = this.greetingComponent();
      greeting.name.set('Angular');
    });
  }

  addPoint() {
    this.greetingComponent().addPoint();
  }
}
