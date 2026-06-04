/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';

@Component({
  selector: 'greeting',
  template: `
    <button (click)="setRecursive()" [disabled]="recursive()">
      Hello World!
    </button>
    @if (recursive()) {
      <greeting />
    }
  `
})
export class GreetingComponent {
  recursive = signal(false);

  setRecursive() {
    this.recursive.set(true);
  }
}
