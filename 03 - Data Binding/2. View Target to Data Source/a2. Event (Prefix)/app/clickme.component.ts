/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { Component } from '@angular/core';

@Component({
  selector: 'clickme',
  template: `
    <div on-click="clicked($event)">Click me!</div>
  `
})
export class ClickMeComponent {
  clicked(event: MouseEvent) {
    alert(`Clicked ${event.target}.`);
  }
}
