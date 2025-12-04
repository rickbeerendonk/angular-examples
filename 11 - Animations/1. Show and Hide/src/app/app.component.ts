/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styles: [
    `
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }

      .fade-in {
        animation: fadeIn 1s;
      }

      .fade-out {
        animation: fadeOut 1s;
      }
    `
  ]
})
export class AppComponent {
  show = signal(true);

  toggleState() {
    this.show.update(s => !s);
  }
}
