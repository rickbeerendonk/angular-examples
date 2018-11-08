/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  template: `
    <h1>Hello {{ ['Invisible', 'Slice', 'Remove'] | slice: 1:2 }} Pipe</h1>
  `
})
export class GreetingComponent {}
