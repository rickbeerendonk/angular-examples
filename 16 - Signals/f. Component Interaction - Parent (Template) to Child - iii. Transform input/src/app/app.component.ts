/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { GreetingComponent } from './greeting/greeting.component';

@Component({
  selector: 'app-root',
  imports: [GreetingComponent],
  template: `
    <h1>Signal Input with Transform</h1>

    <!-- Pass a string that will be transformed to uppercase -->
    <greeting [name]="'alice'" />

    <!-- Pass a number that will be transformed to a string -->
    <greeting [count]="42" />

    <!-- Pass a boolean string that will be transformed to boolean -->
    <greeting [active]="'true'" />
  `
})
export class AppComponent {}
