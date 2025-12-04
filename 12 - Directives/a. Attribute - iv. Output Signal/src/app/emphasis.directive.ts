/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Directive, HostBinding, HostListener, output } from '@angular/core';

@Directive({
  selector: '[emphasis]'
})
export class EmphasisDirective {
  // Output signal - emits hover state changes
  // Usage: <p emphasis (hoverStateChanged)="onHoverChange($event)">
  hoverStateChanged = output<boolean>();

  // Bind to host element's style.color property
  @HostBinding('style.color')
  color: string | null = null;

  // Bind to host element's style.font-weight property
  @HostBinding('style.font-weight')
  fontWeight = 'normal';

  // Listen to mouseenter event on host element
  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.color = 'red';
    this.fontWeight = 'bold';
    // Emit true when mouse enters
    this.hoverStateChanged.emit(true);
  }

  // Listen to mouseleave event on host element
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.color = null;
    this.fontWeight = 'normal';
    // Emit false when mouse leaves
    this.hoverStateChanged.emit(false);
  }
}
