/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[emphasis]'
})
export class EmphasisDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseenter')
  onOnline(): void {
    this.renderer.addClass(this.el.nativeElement, 'emphasis');
  }

  @HostListener('mouseleave')
  onOffline(): void {
    this.renderer.removeClass(this.el.nativeElement, 'emphasis');
  }
}
