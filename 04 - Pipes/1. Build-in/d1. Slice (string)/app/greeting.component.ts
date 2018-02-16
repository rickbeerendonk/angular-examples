/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  template: `
    <h1>
      {{"Hello Slice Pipe" | slice:6:11}}
    </h1>`
})
export class GreetingComponent {
}
