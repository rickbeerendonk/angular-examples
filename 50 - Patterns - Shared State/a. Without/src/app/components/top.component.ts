/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, signal } from '@angular/core';
import { MiddleComponent } from './middle.component';
import { SwitchComponent } from './switch.component';

@Component({
  selector: 'top',
  imports: [MiddleComponent, SwitchComponent],
  template: `
    <middle [color]="color()" />
    <switch (switch)="handleSwitch()"></switch>
  `
})
export class TopComponent {
  color = signal('red');
  handleSwitch() {
    this.color.set(this.color() === 'red' ? 'blue' : 'red');
  }
}
