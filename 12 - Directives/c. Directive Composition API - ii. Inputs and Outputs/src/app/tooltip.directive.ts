/*! Copyright © 2026 Rick Beerendonk !*/

import { Directive, input, output, HostListener } from '@angular/core';

@Directive()
export class TooltipDirective {
  tooltipText = input('');
  tooltipShown = output<string>();

  @HostListener('mouseenter')
  onEnter() {
    if (this.tooltipText()) {
      this.tooltipShown.emit(this.tooltipText());
    }
  }
}
