/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'logtext',
  template: `
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
  @ViewChild('inputRef') inputRef?: ElementRef<HTMLInputElement>;
  @ViewChild('outputRef') outputRef?: ElementRef<HTMLHeadingElement>;

  text: string = 'initial';

  ngAfterViewInit() {
    // View is ready, so inputRef contains the native DOM element
    this.inputRef!.nativeElement.select();
  }

  onInput(target: EventTarget | null) {
    this.outputRef!.nativeElement.innerHTML = (
      target as HTMLInputElement
    ).value;
  }
}
