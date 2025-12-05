/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, ElementRef, AfterViewInit, viewChild } from '@angular/core';

@Component({
  selector: 'logtext',
  template: `
    <p style="color: gray">Change the value before seeing the unsafe effect.</p>
    <input
      autofocus
      #inputRef
      (input)="onInput($event.target)"
      [value]="text"
    />
    <h1 #outputRef>{{ text }}</h1>
  `
})
export class LogTextComponent implements AfterViewInit {
  // Modern signal-based queries
  inputRef = viewChild<ElementRef<HTMLInputElement>>('inputRef');
  outputRef = viewChild<ElementRef<HTMLHeadingElement>>('outputRef');

  text: string = '<a href="javascript:alert(\'Hi there\')">Click me!</a>';

  ngAfterViewInit() {
    // View is ready, so inputRef contains the native DOM element
    this.inputRef()!.nativeElement.select();
  }

  onInput(target: EventTarget | null) {
    this.outputRef()!.nativeElement.innerHTML = (
      target as HTMLInputElement
    ).value;
  }
}
