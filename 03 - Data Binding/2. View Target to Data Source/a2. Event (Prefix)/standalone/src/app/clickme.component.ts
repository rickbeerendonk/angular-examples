/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'clickme',
  template: '<button on-click="clicked($event)">Click me!</button>',
  standalone: true
})
export class ClickMeComponent {
  clicked(event: MouseEvent) {
    alert(`Clicked ${event.target}.`);
  }
}
