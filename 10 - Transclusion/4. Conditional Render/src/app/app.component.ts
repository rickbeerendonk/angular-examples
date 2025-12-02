/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { ContainerComponent } from './container/container.component';

@Component({
  imports: [ContainerComponent],
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  show = true;

  constructor() {
    setInterval(() => (this.show = !this.show), 2000);
  }
}
