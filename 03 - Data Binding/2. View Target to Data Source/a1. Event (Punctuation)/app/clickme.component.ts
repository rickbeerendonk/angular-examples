/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'clickme',
  template: '<button (click)="clicked($event)">Click me!</button>'
})
export class ClickMeComponent {
  event = { target: 'my target' };

  clicked(event: MouseEvent) {
    alert(`Clicked ${event.target}.`);
  }
}
