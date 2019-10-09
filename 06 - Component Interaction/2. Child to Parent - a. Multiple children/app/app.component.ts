/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { IChangeEvent } from './greeting/greeting.component';

@Component({
  moduleId: __moduleName /* Use __moduleName in SystemJS and module.id in commonjs */,
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  greetingText: string;
  greetingSource: string;

  greetingChanged(eventData: IChangeEvent) {
    this.greetingText = eventData.value;
    this.greetingSource = eventData.sourceName;
  }
}
