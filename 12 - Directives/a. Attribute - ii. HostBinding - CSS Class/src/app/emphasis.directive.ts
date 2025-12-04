/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[emphasis]'
})
export class EmphasisDirective {
  // Bind this property to the host element's 'emphasis' CSS class
  // When true, adds class="emphasis", when false, removes it
  @HostBinding('class.emphasis')
  isEmphasized = false;

  // Listen to mouseenter event on the host element
  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.isEmphasized = true;
  }

  // Listen to mouseleave event on the host element
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.isEmphasized = false;
  }
}
