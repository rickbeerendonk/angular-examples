/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, computed, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  // viewChild() queries the wrapper element in our template.
  // The wrapper contains ng-content which projects parent content.
  contentWrapper = viewChild<ElementRef>('contentWrapper');

  // Computed signal that checks if the wrapper has child nodes.
  // Returns truthy value only when content is actually projected.
  contentRef = computed(() => {
    const wrapper = this.contentWrapper();
    return wrapper?.nativeElement.hasChildNodes() ? wrapper : undefined;
  });
}
