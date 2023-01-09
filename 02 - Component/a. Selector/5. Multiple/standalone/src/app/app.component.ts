/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { GreetingComponent } from './greeting.component';

@Component({
  selector: 'app',
  standalone: true,
  imports: [GreetingComponent],
  template: `
    <greeting>Should be replaced.</greeting>
    <groet>Should be replaced.</groet>
    <div class="replace">Should be replaced.</div>
    <div data-replace>Should be replaced.</div>
    <div data-should-replace="true">Should be replaced.</div>
    <div>Should not be replaced.</div>
  `
})
export class AppComponent {}
