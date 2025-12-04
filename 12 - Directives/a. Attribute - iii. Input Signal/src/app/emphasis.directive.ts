/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import {
  Directive,
  effect,
  HostBinding,
  HostListener,
  input
} from '@angular/core';

@Directive({
  selector: '[emphasis]'
})
export class EmphasisDirective {
  // Input signal with default value 'red'
  // Usage: <p emphasis color="blue">
  color = input<string>('red');

  // Bind to host element's style.color property
  @HostBinding('style.color')
  currentColor: string | null = null;

  // Bind to host element's style.font-weight property
  @HostBinding('style.font-weight')
  fontWeight = 'normal';

  constructor() {
    // Effect to demonstrate signal reactivity
    effect(() => {
      // We can read the color signal here if needed
      // For this example, we read it in the event handler
    });
  }

  // Listen to mouseenter event on host element
  @HostListener('mouseenter')
  onMouseEnter(): void {
    // Read the input signal value
    this.currentColor = this.color();
    this.fontWeight = 'bold';
  }

  // Listen to mouseleave event on host element
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.currentColor = null;
    this.fontWeight = 'normal';
  }
}
