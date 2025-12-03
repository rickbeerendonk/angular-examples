/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';

@Component({
  selector: 'greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css'],
  standalone: true
})
export class GreetingComponent {
  name = signal('World');
  points = signal('.');

  addPoint() {
    this.points.update(p => p + '.');
  }
}
