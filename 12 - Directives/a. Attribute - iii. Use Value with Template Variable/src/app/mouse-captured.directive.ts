/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[mouseCaptured]',
  exportAs: 'mouseCaptured'
})
export class MouseCapturedDirective {
  @HostListener('mouseenter')
  onMouseEnter() {
    this.captured = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.captured = false;
  }

  public captured = false;
}
