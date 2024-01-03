/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app',
  template: `
    <button *ngFor="let nr of [1, 2, 3]" (mousedown)="handleMouseDown($event)">
      {{ nr }}
    </button>
    <div style="color: gray">
      <p>Open console, tab "Elements", sub-tab "Event Listeners".</p>
      <div>
        Observe:
        <ul>
          <li>Buttons don't have event handlers.</li>
          <li>All event handlers are on the Angular root.</li>
        </ul>
      </div>
      <p>
        Remove the MouseDown event listeners on the Angular root and observe the
        clicks no longer work.
      </p>
    </div>
  `,
  standalone: true,
  imports: [NgFor]
})
export class AppComponent {
  handleMouseDown(ev: MouseEvent) {
    alert(`Button ${(ev.target as HTMLButtonElement).innerText} mouse down!`);
  }
}
