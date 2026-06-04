/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';

import { EmphasisDirective } from './emphasis.directive';

@Component({
  selector: 'app-root',
  imports: [EmphasisDirective],
  template: `
    <h1>Attribute Directives - output()</h1>
    <p>Hover state: {{ hoverState() }}</p>
    <hr />
    <p>This is a normal paragraph.</p>
    <p emphasis (hoverStateChanged)="onHoverChange($event)">
      This paragraph emits events when hover state changes. Hover over it!
    </p>
  `
})
export class AppComponent {
  hoverState = signal('not hovering');

  onHoverChange(isHovering: boolean): void {
    this.hoverState.set(isHovering ? 'hovering' : 'not hovering');
  }
}
