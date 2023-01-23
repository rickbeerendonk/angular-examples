/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChild,
  SecurityContext
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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

  text: string = '<a href="javascript:alert(\'Hi there\')">Click me!</a>';

  constructor(private sanitizer: DomSanitizer) {}

  ngAfterViewInit() {
    // View is ready, so inputRef contains the native DOM element
    this.inputRef!.nativeElement.select();
  }

  onInput(target: EventTarget | null) {
    this.outputRef!.nativeElement.innerHTML =
      this.sanitizer.sanitize(
        SecurityContext.URL,
        (target as HTMLInputElement).value
      ) || '';
  }
}
