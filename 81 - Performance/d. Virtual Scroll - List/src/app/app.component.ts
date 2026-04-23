/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, signal } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  imports: [ScrollingModule],
  template: `
    <h1>Virtual scroll — 10 000 rows</h1>
    <p>Open Elements panel: only the visible rows exist in the DOM.</p>

    <cdk-virtual-scroll-viewport itemSize="32" class="viewport">
      @for (user of users(); track user.id) {
        <div class="row">
          {{ user.id }} — {{ user.name }} &lt;{{ user.email }}&gt;
        </div>
      }
    </cdk-virtual-scroll-viewport>
  `,
  styles: [
    `
      .viewport {
        height: 400px;
        width: 600px;
        border: 1px solid #ccc;
      }
      .row {
        height: 32px;
        line-height: 32px;
        padding: 0 8px;
        border-bottom: 1px solid #eee;
      }
    `
  ]
})
export class AppComponent {
  users = signal<User[]>(
    Array.from({ length: 10_000 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`
    }))
  );
}
