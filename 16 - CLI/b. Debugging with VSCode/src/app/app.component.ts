/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <edit [value]="name" (change)="changed($event)"></edit>
    <br />
    <greeting [name]="name"></greeting>
  `,
  styles: []
})
export class AppComponent {
  name: string = 'World';

  changed(value: string) {
    this.name = value;
  }
}
