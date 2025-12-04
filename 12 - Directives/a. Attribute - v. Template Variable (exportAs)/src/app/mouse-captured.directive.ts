/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[mouseCaptured]',
  // exportAs allows the directive to be referenced in template with #variable="name"
  // Usage: <p mouseCaptured #mouse="mouseCaptured">{{ mouse.captured }}</p>
  exportAs: 'mouseCaptured'
})
export class MouseCapturedDirective {
  // Listen to mouseenter event on the host element
  @HostListener('mouseenter')
  onMouseEnter() {
    this.captured = true;
  }

  // Listen to mouseleave event on the host element
  @HostListener('mouseleave')
  onMouseLeave() {
    this.captured = false;
  }

  // Public property accessible in template via template variable
  public captured = false;
}
