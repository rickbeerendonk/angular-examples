/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  template: `
    <p>{{ 'one,two,three' | csv }}</p>
    <p>{{ 'one-two-three' | csv: '-' }}</p>
    <p>{{ 'one,two,three' | csv: '':'..' }}</p>
  `
})
export class GreetingComponent {}
