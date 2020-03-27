/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'clickme',
  template: '<div (click)="clicked($event)">Click me!</div>'
})
export class ClickMeComponent {
  clicked(event: MouseEvent) {
    alert(`Clicked ${event.target}.`);
  }
}
