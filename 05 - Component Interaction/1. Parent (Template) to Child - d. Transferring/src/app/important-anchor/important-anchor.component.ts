/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, ElementRef, inject } from '@angular/core';

@Component({
  selector: 'important-anchor',
  templateUrl: './important-anchor.component.html',
  standalone: true
})
export class ImportantAnchorComponent {
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  ngAfterViewInit() {
    // Get all attributes from host element
    const hostElement = this.elementRef.nativeElement as HTMLElement;
    const anchor = hostElement.querySelector('a');

    if (anchor) {
      // Transfer all attributes from host to anchor
      for (const { name, value } of hostElement.attributes) {
        anchor.setAttribute(name, value);
      }
    }
  }
}
