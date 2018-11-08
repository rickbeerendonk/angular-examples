/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { Component, Input } from '@angular/core';

@Component({
  moduleId: __moduleName /* Use __moduleName in SystemJS and module.id in commonjs */,
  selector: 'greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent {
  private _name: string;

  @Input()
  set name(name: string) {
    console.log('GreetingComponent.name = ' + name);
    this._name = name;
  }

  get name(): string {
    return this._name;
  }
}
