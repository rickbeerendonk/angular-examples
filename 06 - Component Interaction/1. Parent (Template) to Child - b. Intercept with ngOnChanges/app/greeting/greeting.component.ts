/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  moduleId: __moduleName /* NOT needed in Angular CLI */,
  selector: 'greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnChanges {
  @Input()
  name: string;

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (const propName in changes) {
      console.log(
        `GreetingComponent.${propName} = ${changes[propName].currentValue} (was: ${changes[propName].previousValue})`
      );
    }
  }
}
