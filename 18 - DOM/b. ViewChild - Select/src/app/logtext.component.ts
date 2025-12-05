/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, ElementRef, AfterViewInit, viewChild } from '@angular/core';

@Component({
  selector: 'logtext',
  template: `
    <input
      autofocus
      #inputRef
      (input)="onInput($event.target)"
      [value]="text"
    />
    <h1>{{ text }}</h1>
  `
})
export class LogTextComponent implements AfterViewInit {
  // Modern signal-based query
  inputRef = viewChild<ElementRef<HTMLInputElement>>('inputRef');

  text: string = 'initial';

  ngAfterViewInit() {
    // View is ready, so inputRef contains the native DOM element
    this.inputRef()!.nativeElement.select();
  }

  onInput(target: EventTarget | null) {
    this.text = (target as HTMLInputElement).value;
  }
}
