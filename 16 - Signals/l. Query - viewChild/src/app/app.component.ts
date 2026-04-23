/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <input #nameInput placeholder="Type your name" />
    <button (click)="focusInput()">Focus input</button>
  `
})
export class AppComponent {
  // Optional: Signal<ElementRef | undefined>
  // nameInput = viewChild<ElementRef>('nameInput');

  // Required: Signal<ElementRef> — no undefined check needed
  nameInput = viewChild.required<ElementRef<HTMLInputElement>>('nameInput');

  focusInput() {
    this.nameInput().nativeElement.focus();
  }
}
