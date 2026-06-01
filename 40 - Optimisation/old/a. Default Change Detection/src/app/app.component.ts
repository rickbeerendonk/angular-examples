/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { GreetingComponent } from './greeting.component';

@Component({
  selector: 'app',
  imports: [GreetingComponent],
  template: `
    <input autofocus #text (keyup)="(0)" />
    <h1>App: Hello {{ text.value }}</h1>

    <hr />

    <greeting />
  ` // No (keyup) binding needed: default change detection runs after every DOM event.
})
export class AppComponent {}
