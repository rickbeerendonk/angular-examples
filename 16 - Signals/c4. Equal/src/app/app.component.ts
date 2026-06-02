/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component, effect, signal } from '@angular/core';

interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app',
  template: `
    <h1>{{ user().name }} ({{ user().age }})</h1>
    <p>Signal change count: {{ changeCount() }}</p>
    <button (click)="setSame()">Set equal value</button>
    <button (click)="setDifferent()">Set changed value</button>
  `
})
export class AppComponent {
  // Custom equality: only notify when name or age actually changes
  user = signal<User>(
    { name: 'Alice', age: 30 },
    { equal: (a, b) => a.name === b.name && a.age === b.age }
  );

  changeCount = signal(0);

  constructor() {
    effect(() => {
      this.user(); // subscribe to the signal
      this.changeCount.update(c => c + 1);
    });
  }

  setSame() {
    // Equal by custom comparison → consumers NOT notified
    this.user.set({ name: 'Alice', age: 30 });
  }

  setDifferent() {
    // Changed → consumers ARE notified
    this.user.set({ name: 'Bob', age: 30 });
  }
}
