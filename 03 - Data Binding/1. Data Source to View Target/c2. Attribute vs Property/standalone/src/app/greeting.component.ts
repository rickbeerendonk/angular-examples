/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  template: `
    <p>Prefer property binding:</p>
    <button [disabled]="true">Hello World!</button>

    <p>Avoid attribute binding if possible:</p>
    <button [attr.disabled]="'disabled'">Hello World!</button>
  `,
  standalone: true
})
export class GreetingComponent {}
