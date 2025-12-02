/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { NgFor, NgForOf } from '@angular/common';

@Component({
  imports: [NgForOf],
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
          <li>Buttons do have event handlers.</li>
          <li>Not all event handlers are on the Angular root.</li>
        </ul>
      </div>
      <p>
        Remove the MouseDown event listeners and observe the clicks no longer
        work.
      </p>
    </div>
  `
})
export class AppComponent {
  handleMouseDown(ev: MouseEvent) {
    alert(`Button ${(ev.target as HTMLButtonElement).innerText} mouse down!`);
  }
}
