/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GreetingComponent } from './greeting/greeting.component';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit, OnInit {
  // Query first GreetingComponent in the template
  @ViewChild(GreetingComponent, { static: true })
  private greetingComponent!: GreetingComponent;

  // Lifecycle method:
  // Called after Angular has fully initialized a component's view.
  ngAfterViewInit() {
    setTimeout(() => (this.greetingComponent.name = 'Angular'), 0);
  }

  ngOnInit() {
    debugger;
    this.greetingComponent.addPoint();
  }

  addPoint() {
    this.greetingComponent.addPoint();
  }
}
