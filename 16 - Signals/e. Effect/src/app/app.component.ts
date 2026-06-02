/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

// Use effect() for side effects that should run when signals change:
// - Logging
// - Syncing with external systems (localStorage, API calls)
// - Updating DOM/browser APIs (title, meta tags)
// - Analytics/tracking
//
// DON'T use effect() for:
// - Deriving values → use computed() instead
// - Updating other signals → use computed() or direct updates
// - Template rendering → signals auto-update templates

import { Component, effect, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app',
  template: `
    <input (input)="onInput($event.target)" [value]="name()" />
    <h1>Hello {{ name() }}</h1>
  `
})
export class AppComponent {
  private readonly title = inject(Title);
  // Initialize directly from localStorage — no ngOnInit needed
  name = signal(localStorage.getItem('name') || 'World');

  constructor() {
    // Side effect: Set document title
    effect(() => {
      this.title.setTitle(`Hello ${this.name()}`);
    });

    // Side effect: Store in localstorage
    effect(() => {
      localStorage.setItem('name', this.name());
    });
  }

  onInput(target: EventTarget | null) {
    // Set replaces the previous value
    this.name.set((target as HTMLInputElement).value);
  }
}
