/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  template: `
    <h1 [style.color]="important ? 'orange' : 'gray'">Hello World!</h1>
  `
})
export class GreetingComponent {
  important: boolean = true;
}
