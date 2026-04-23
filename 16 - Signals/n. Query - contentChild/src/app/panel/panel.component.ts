/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component, ElementRef, contentChild } from '@angular/core';

@Component({
  selector: 'panel',
  template: `
    <ng-content></ng-content>
    <button (click)="report()">Report header</button>
  `
})
export class PanelComponent {
  // Signal<ElementRef | undefined>
  header = contentChild<ElementRef>('header');

  report() {
    alert(`Header text: ${this.header()?.nativeElement.textContent}`);
  }
}
