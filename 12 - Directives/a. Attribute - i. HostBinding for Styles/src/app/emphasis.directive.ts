/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[emphasis]'
})
export class EmphasisDirective {
  @HostBinding('style.color')
  color: string | null = null;

  @HostBinding('style.font-weight')
  fontWeight = 'normal';

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.color = 'red';
    this.fontWeight = 'bold';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.color = null;
    this.fontWeight = 'normal';
  }
}
