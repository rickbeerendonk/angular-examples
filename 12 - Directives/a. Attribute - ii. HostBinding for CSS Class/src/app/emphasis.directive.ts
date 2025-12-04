/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[emphasis]'
})
export class EmphasisDirective {
  @HostBinding('class.emphasis')
  isEmphasized = false;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.isEmphasized = true;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.isEmphasized = false;
  }
}
