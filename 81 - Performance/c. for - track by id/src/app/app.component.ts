/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, signal } from '@angular/core';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  template: `
    <h1>&#64;for — track by id</h1>
    <button (click)="reorder()">Reorder (new array, same data)</button>

    <ul>
      @for (user of users(); track user.id) {
        <li>{{ user.id }} — {{ user.name }}</li>
      }
    </ul>

    <p>
      Open Elements panel. Reorder rebuilds the array reference but with the
      same items. With <code>track user.id</code>, Angular reuses the &lt;li&gt;
      nodes and only reorders them. With <code>track $index</code>
      every &lt;li&gt; would be re-rendered.
    </p>
  `
})
export class AppComponent {
  users = signal<User[]>([
    { id: 1, name: 'Ada' },
    { id: 2, name: 'Linus' },
    { id: 3, name: 'Grace' },
    { id: 4, name: 'Dennis' }
  ]);

  reorder() {
    this.users.update(list => [...list].reverse());
  }
}
