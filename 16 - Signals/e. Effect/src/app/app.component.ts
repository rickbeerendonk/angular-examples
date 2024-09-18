/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { Component, effect, OnInit, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app',
  standalone: true,
  template: `
    <input (input)="onInput($event.target)" [value]="name()" />
    <h1>Hello {{ name() }}</h1>
  `
})
export class AppComponent implements OnInit {
  name = signal('World');

  constructor(title: Title) {
    // Side effect: Set document title
    effect(() => {
      title.setTitle(`Hello ${this.name()}`);
    });

    // Side effect: Store in localstorage
    effect(() => {
      localStorage.setItem('name', this.name());
    });
  }

  ngOnInit(): void {
    // Read from localstorage
    this.name.set(localStorage.getItem('name') || 'World');
  }

  onInput(target: EventTarget | null) {
    // Set replaces the previous value
    this.name.set((target as HTMLInputElement).value);
  }
}
