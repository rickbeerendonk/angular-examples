/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'important-anchor',
  templateUrl: './important-anchor.component.html',
  standalone: true
})
export class ImportantAnchorComponent {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    // Get all attributes from host element
    const hostElement = this.elementRef.nativeElement as HTMLElement;
    const anchor = hostElement.querySelector('a');

    if (anchor) {
      // Transfer all attributes from host to anchor
      for (let i = 0; i < hostElement.attributes.length; i++) {
        const attr = hostElement.attributes[i];
        anchor.setAttribute(attr.name, attr.value);
      }
    }
  }
}
