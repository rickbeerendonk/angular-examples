/*! Copyright © 2026 Rick Beerendonk !*/

import { Directive, HostListener } from '@angular/core';

@Directive()
export class RippleDirective {
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const el = event.target as HTMLElement;
    el.style.outline = '3px solid cornflowerblue';
    setTimeout(() => (el.style.outline = ''), 300);
  }
}
