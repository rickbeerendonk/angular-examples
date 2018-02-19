/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app',
  template: `
    <h1>Title Demo</h1>
    <div>
      Old title: {{oldTitle}}
    </div>`
})
export class AppComponent {
  oldTitle: string;

  constructor (title: Title) {
    this.oldTitle = title.getTitle();
    title.setTitle('Title Demo');
  }
}
