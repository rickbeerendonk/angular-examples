/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019-2025 Rick Beerendonk     !*/

import { Component, viewChild, AfterViewInit } from '@angular/core';
import { GreetingComponent } from './greeting/greeting.component';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  imports: [GreetingComponent]
})
export class AppComponent implements AfterViewInit {
  // Query first GreetingComponent in the template (signal-based)
  private greetingComponent = viewChild.required(GreetingComponent);

  // Lifecycle method:
  // Called after Angular has fully initialized a component's view.
  ngAfterViewInit() {
    // With signals, we can set directly - no setTimeout needed
    this.greetingComponent().name.set('Angular');
  }

  addPoint() {
    this.greetingComponent().addPoint();
  }
}
