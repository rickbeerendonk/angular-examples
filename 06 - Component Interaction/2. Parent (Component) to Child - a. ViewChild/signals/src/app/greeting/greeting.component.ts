/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';

@Component({
  selector: 'greeting',
  template: '<h1>Hello {{ name() }}{{ points() }}</h1>',
  styles: ['h1 { font-family: sans-serif; }'],
})
export class GreetingComponent {
  name = signal('World');
  points = signal('.');

  addPoint() {
    this.points.update((p) => p + '.');
  }
}
