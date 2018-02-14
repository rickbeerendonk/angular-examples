/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  styleUrls: ['./app/greeting.component.css'],
  template: `
    <div>Hello World</div>
    <child></child>`
})
export class GreetingComponent {
}
