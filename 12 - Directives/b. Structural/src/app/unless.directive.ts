/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import {
  Directive,
  effect,
  input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {
  // Input signal - required boolean value
  unless = input.required<boolean>();

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    // Effect reacts to input signal changes
    effect(() => {
      const condition = this.unless();
      // Show template when condition is false (opposite of *ngIf)
      if (!condition) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
}
