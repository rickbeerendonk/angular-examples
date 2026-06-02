/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'clickme',
  template: '<button (click)="clicked($event)">Click me!</button>'
})
export class ClickMeComponent {
  clicked(event: MouseEvent) {
    debugger;
    alert(`Clicked ${event.target}.`);
  }
}
