/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { GreetingComponent } from './greeting/greeting.component';

@Component({
  moduleId: __moduleName /* Use __moduleName in SystemJS and module.id in commonjs */,
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
  @ViewChild(GreetingComponent, { static: true })
  private greetingComponent: GreetingComponent;

  ngAfterViewInit() {
    // Called after Angular has fully initialized a component's view.
    // However, causes ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => (this.greetingComponent.name = 'Angular'), 0);
  }

  addPoint() {
    this.greetingComponent.addPoint();
  }
}
