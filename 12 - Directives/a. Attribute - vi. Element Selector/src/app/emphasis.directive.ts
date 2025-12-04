/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  // Element selector - automatically applies to all <p> elements
  selector: 'p'
})
export class EmphasisDirective {
  // Bind this property to the host element's style.color
  @HostBinding('style.color')
  color: string | null = null;

  // Bind this property to the host element's style.font-weight
  @HostBinding('style.font-weight')
  fontWeight = 'normal';

  // Listen to mouseenter event on the host element
  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.color = 'red';
    this.fontWeight = 'bold';
  }

  // Listen to mouseleave event on the host element
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.color = null;
    this.fontWeight = 'normal';
  }
}
