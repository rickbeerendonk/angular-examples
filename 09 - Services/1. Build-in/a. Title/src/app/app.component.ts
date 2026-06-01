/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app',
  template: `
    <h1>Title Demo</h1>
    <div>Old title: {{ oldTitle }}</div>
  `
})
export class AppComponent {
  private readonly title = inject(Title);
  oldTitle?: string;

  constructor() {
    this.oldTitle = this.title.getTitle();
    this.title.setTitle('Title Demo');
  }
}
