/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'greeting',
  template: `
    <button (click)="setRecursive()" [disabled]="recursive">
      Hello World!
    </button>
    <greeting *ngIf="recursive" />
  `,
  imports: [NgIf]
})
export class GreetingComponent {
  recursive = false;

  setRecursive() {
    this.recursive = true;
  }
}
