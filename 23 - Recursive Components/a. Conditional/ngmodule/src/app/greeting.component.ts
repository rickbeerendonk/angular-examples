/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  template: `
    <button (click)="setRecursive()" [disabled]="recursive">
      Hello World!
    </button>
    <greeting *ngIf="recursive"></greeting>
  `
})
export class GreetingComponent {
  recursive = false;

  setRecursive() {
    this.recursive = true;
  }
}
