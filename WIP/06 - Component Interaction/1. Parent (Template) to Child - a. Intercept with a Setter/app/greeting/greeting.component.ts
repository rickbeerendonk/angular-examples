/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, Input } from '@angular/core';

@Component({
  selector: 'greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent {
  private _name: string;

  @Input()
  set name(value: string) {
    console.log('GreetingComponent.name = ' + value);
    this._name = value;
  }

  get name(): string {
    return this._name;
  }
}
