/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, output, input, signal } from '@angular/core';

export interface IChangeEvent {
  source: object;
  sourceName?: string;
  value: string;
}

@Component({
  selector: 'greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css'],
  standalone: true
})
export class GreetingComponent {
  name = input<string>();

  value = signal('Hello World!');
  change = output<IChangeEvent>();

  valueChanged(target: EventTarget | null) {
    const newValue = (target as HTMLInputElement).value;
    this.value.set(newValue);
    this.change.emit({
      source: this,
      sourceName: this.name(),
      value: this.value()
    });
  }
}
