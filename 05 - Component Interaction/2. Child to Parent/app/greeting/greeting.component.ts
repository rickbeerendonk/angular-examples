/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: __moduleName /* Use __moduleName in SystemJS and module.id in commonjs */,
  selector: 'greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent {
  value: string = 'Hello World!';
  @Output() change: EventEmitter<string> = new EventEmitter();

  valueChanged(newValue: string) {
    this.value = newValue;
    this.change.emit(newValue);
  }
}
