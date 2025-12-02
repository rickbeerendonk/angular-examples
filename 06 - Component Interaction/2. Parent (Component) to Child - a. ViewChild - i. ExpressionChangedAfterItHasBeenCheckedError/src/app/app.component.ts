/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { GreetingComponent } from './greeting/greeting.component';

@Component({
  standalone: true,
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
  // Query first GreetingComponent in the template
  @ViewChild(GreetingComponent, { static: true })
  private greetingComponent!: GreetingComponent;

  // Lifecycle method:
  // Called after Angular has fully initialized a component's view.
  ngAfterViewInit() {
    debugger;
    // Don't immediately manipulate data.
    // Will throw ExpressionChangedAfterItHasBeenCheckedError.
    this.greetingComponent.name = 'Angular';
  }
}
