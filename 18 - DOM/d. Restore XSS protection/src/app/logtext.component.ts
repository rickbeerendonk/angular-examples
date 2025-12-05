/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import {
  Component,
  ElementRef,
  AfterViewInit,
  viewChild,
  SecurityContext,
  inject
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
  // Modern signal-based queries
  inputRef = viewChild<ElementRef<HTMLInputElement>>('inputRef');
  outputRef = viewChild<ElementRef<HTMLHeadingElement>>('outputRef');

  // Modern inject() function
  private sanitizer = inject(DomSanitizer);

  text: string = '<u onmouseover=alert("Hacked!")>Dangerous</u>';

  ngAfterViewInit() {
    // View is ready, so inputRef contains the native DOM element
    this.inputRef()!.nativeElement.select();
  }

  onInput(target: EventTarget | null) {
    this.outputRef()!.nativeElement.innerHTML =
      this.sanitizer.sanitize(
        SecurityContext.URL,
        (target as HTMLInputElement).value
      ) || '';
  }
}
